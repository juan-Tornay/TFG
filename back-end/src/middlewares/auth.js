import jwt from 'jsonwebtoken';
import config from '../config.js';

export const authenticateUser = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) {
    return res.status(401).json({ error: 'Acceso no autorizado' });
  }

  try {
    const decoded = jwt.verify(token, config.jwtSecret);
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(401).json({ error: 'Token inválido' });
  }
};

export const authorizeAdmin = (req, res, next) => {
  // Solo permitir si el username es 'admin'
  if (!req.user || req.user.username !== 'admin') {
    return res.status(403).json({ error: 'Acceso denegado. Solo el usuario admin puede realizar esta acción.' });
  }
  next();
};

export const authorizePhotoUploader = (req, res, next) => {
  // Permitir si el id está en la lista de autorizados
  const authorizedIds = ['683e0ee39935433408c849df'];
  if (!req.user || !authorizedIds.includes(req.user.id)) {
    return res.status(403).json({ error: 'Acceso denegado. Solo el usuario autorizado puede subir fotos.' });
  }
  next();
};
