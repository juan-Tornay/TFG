import express from 'express';
import request from 'supertest';
import expressLoader from '../../src/loaders/express.js';

describe('Express Loader', () => {
  let app;

  beforeEach(() => {
    app = express();
    expressLoader(app);
  });

  it('should load bodyParser middleware', async () => {
    app.post('/test', (req, res) => {
      res.status(200).json(req.body);
    });

    const res = await request(app)
      .post('/test')
      .send({ test: 'test' });

    expect(res.statusCode).toBe(200);
    expect(res.body.test).toBe('test');
  });

  // ...other tests for routes and middleware...
});
