//Configura Express y sus middlewares.
import bodyParser from 'body-parser';
import userRoutes from '../routes/users.js';

export default (app) => {
  app.use(bodyParser.json());

  // Routes
  app.use('/api/users', userRoutes);
};
