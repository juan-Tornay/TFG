import express from 'express';
import usersRoutes from './users.js';
import photoRoutes from './photos.js'; // Nueva ruta para la fototeca
import { authenticateUser, authorizeAdmin } from '../middlewares/auth.js'; // Middleware de autenticación y autorización

const router = express.Router();

router.use('/users', usersRoutes); // Monta las rutas de usuarios en `/users`

// Rutas para la fototeca
router.use('/photos', authenticateUser, photoRoutes); // Solo usuarios autenticados pueden acceder
router.post('/photos/upload', authenticateUser, authorizeAdmin, photoRoutes); // Solo el administrador puede subir fotos

export default router;
