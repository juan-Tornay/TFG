import express from 'express';

const router = express.Router();

// Obtener todas las fotos (solo usuarios autenticados)
router.get('/', (req, res) => {
  // Lógica para obtener las fotos
  res.status(200).json({ message: 'Fotos obtenidas correctamente' });
});

// Subir una nueva foto (solo administrador)
router.post('/upload', (req, res) => {
  // Lógica para subir una foto
  res.status(201).json({ message: 'Foto subida correctamente' });
});

export default router;
