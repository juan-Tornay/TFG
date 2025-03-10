import request from 'supertest';
import express from 'express';
import userRoutes from '../../routes/users.js';
import User from '../../models/user.js';
import jwt from 'jsonwebtoken';
import config from '../../config.js';

const app = express();
app.use(express.json());
app.use('/api/users', userRoutes);

describe('User Routes', () => {
  describe('POST /api/users/register', () => {
    it('should register a new user', async () => {
      const res = await request(app)
        .post('/api/users/register')
        .send({
          username: 'testuser',
          password: 'Test@1234',
          email: 'test@example.com'
        });

      expect(res.statusCode).toBe(201);
      expect(res.body.message).toBe('Usuario registrado correctamente');
    });
  });

  describe('POST /api/users/login', () => {
    it('should login a user', async () => {
      const user = new User({
        username: 'testuser',
        password: await bcrypt.hash('Test@1234', 10),
        email: 'test@example.com'
      });
      await user.save();

      const res = await request(app)
        .post('/api/users/login')
        .send({
          email: 'test@example.com',
          password: 'Test@1234'
        });

      expect(res.statusCode).toBe(200);
      expect(res.body.message).toBe('Inicio de sesión exitoso');
      expect(res.body.token).toBeDefined();
    });
  });

  // ...other tests for GET /api/users, DELETE /api/users/:id...
});
