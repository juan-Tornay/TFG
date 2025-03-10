import User from '../models/user.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

// Register a new user
export const registerUser = async (req, res) => {
  const { username, password, email } = req.body;
  if (!username || !password || !email) {
    return res.status(400).send('All fields are required');
  }
  const user = new User({ username, password, email });
  try {
    await user.save();
    res.status(201).send('User registered successfully');
  } catch (error) {
    res.status(400).send(`Error registering user: ${error.message}`);
  }
};

// Login user
export const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      console.log('Usuario no encontrado con el correo electrónico:', email);
      return res.status(401).send('Invalid email or password');
    }

    console.log('Usuario encontrado:', user);

    // Verificar la contraseña con bcrypt
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      console.log('Contraseña incorrecta para el usuario:', email);
      return res.status(401).send('Invalid email or password');
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.status(200).json({ message: 'Login successful', token });
  } catch (error) {
    console.error('❌ Error en login:', error);
    res.status(400).send('Error logging in user');
  }
};

// Get user by ID
export const getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).send('User not found');
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(400).send('Error fetching user');
  }
};

// Get all users
export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(400).send('Error fetching users');
  }
};

// Update user by ID
export const updateUserById = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!user) {
      return res.status(404).send('User not found');
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(400).send('Error updating user');
  }
};

// Delete user by ID
export const deleteUserById = async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) {
      return res.status(404).send('User not found');
    }
    res.status(200).send('User deleted successfully');
  } catch (error) {
    res.status(400).send('Error deleting user');
  }
};
