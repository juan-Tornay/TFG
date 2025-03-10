import express from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/user.js';
import config from '../config.js';
import * as userController from '../controllers/users.js'; // Importar el controlador de usuarios

const router = express.Router();

/**
 * @swagger
 * /api/users/register:
 *   post:
 *     summary: Register a new user
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *               password:
 *                 type: string
 *               email:
 *                 type: string
 *     responses:
 *       201:
 *         description: User registered successfully
 *       400:
 *         description: Error registering user
 */
router.post('/register', async (req, res) => {
    try {
        const { username, email, password } = req.body;

        if (!username || !email || !password) {
            return res.status(400).json({ error: 'Todos los campos son obligatorios' });
        }

        // Crear un nuevo usuario sin hashear la contraseña manualmente
        const newUser = new User({ username, email, password });
        await newUser.save();

        res.status(201).json({ message: 'Usuario registrado correctamente' });
    } catch (error) {
        console.error('❌ Error registrando usuario:', error);
        res.status(500).json({ error: 'Error registrando usuario' });
    }
});

/**
 * @swagger
 * /api/users/login:
 *   post:
 *     summary: Login a user
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: Login successful
 *       401:
 *         description: Invalid email or password
 *       400:
 *         description: Error logging in user
 */
router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;

        // Verificar que se envió email y contraseña
        if (!email || !password) {
            return res.status(400).json({ error: 'Todos los campos son obligatorios' });
        }

        // Buscar usuario en la base de datos
        const user = await User.findOne({ email });

        if (!user) {
            console.log('Usuario no encontrado con el correo electrónico:', email);
            return res.status(401).json({ error: 'Correo Electrónico o Contraseña incorrectos' });
        }

        // Verificar la contraseña con bcrypt
        console.log('Contraseña ingresada:', password);
        console.log('Contraseña almacenada:', user.password);
        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            console.log('Contraseña incorrecta para el usuario:', email);
            return res.status(401).json({ error: 'Correo Electrónico o Contraseña incorrectos' });
        }

        // Crear token JWT
        const token = jwt.sign({ id: user._id }, config.jwtSecret, { expiresIn: '1h' });

        res.status(200).json({ message: 'Inicio de sesión exitoso', token });
    } catch (error) {
        console.error('❌ Error en login:', error);
        res.status(500).json({ error: 'Error en el servidor' });
    }
});

/**
 * @swagger
 * /api/users:
 *   get:
 *     summary: Get all users
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: List of all users
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/User'
 *       400:
 *         description: Error fetching users
 */
router.get('/', userController.getAllUsers);

/**
 * @swagger
 * /api/users/{id}:
 *   delete:
 *     summary: Delete a user by ID
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The user ID
 *     responses:
 *       200:
 *         description: User deleted successfully
 *       404:
 *         description: User not found
 *       400:
 *         description: Error deleting user
 */
router.delete('/:id', userController.deleteUserById);

export default router;
