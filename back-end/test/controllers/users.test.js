import { expect } from 'chai';
import sinon from 'sinon';
import User from '../../models/user.js';
import * as userController from '../../controllers/users.js';

describe('User Controller', () => {
  describe('registerUser', () => {
    it('should register a new user', async () => {
      const req = {
        body: {
          username: 'testuser',
          password: 'Test@1234',
          email: 'test@example.com'
        }
      };
      const res = {
        status: jest.fn().mockReturnThis(),
        send: jest.fn()
      };
      jest.spyOn(User.prototype, 'save').mockResolvedValue();

      await userController.registerUser(req, res);

      expect(res.status).toHaveBeenCalledWith(201);
      expect(res.send).toHaveBeenCalledWith('User registered successfully');

      User.prototype.save.mockRestore();
    });
  });

  describe('loginUser', () => {
    it('should login a user', async () => {
      const req = {
        body: {
          email: 'test@example.com',
          password: 'Test@1234'
        }
      };
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
        send: jest.fn()
      };
      const user = new User({
        username: 'testuser',
        password: await bcrypt.hash('Test@1234', 10),
        email: 'test@example.com'
      });
      jest.spyOn(User, 'findOne').mockResolvedValue(user);

      await userController.loginUser(req, res);

      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith(expect.objectContaining({ message: 'Login successful' }));

      User.findOne.mockRestore();
    });
  });

  // ...other tests for getUserById, getAllUsers, updateUserById, deleteUserById...
});
