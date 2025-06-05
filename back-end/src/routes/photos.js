import express from 'express';
import { authenticateUser, authorizePhotoUploader } from '../middlewares/auth.js';

const router = express.Router();

// Todas las rutas requieren autenticación
router.use(authenticateUser);

// Obtener todas las fotos (solo usuarios autenticados)
router.get('/', (req, res) => {
  // Lógica para obtener las fotos
  res.status(200).json({ message: 'Fotos obtenidas correctamente' });
});

// Subir una nueva foto (solo usuario con id específico)
router.post('/upload', authorizePhotoUploader, (req, res) => {
  // Lógica para subir una foto
  res.status(201).json({ message: 'Foto subida correctamente' });
});

export default router;
