import express from 'express';
import usersRoutes from './users.js';

const router = express.Router();

router.use('/users', usersRoutes); // Monta las rutas de usuarios en `/users`

export default router;
