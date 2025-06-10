import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors'; // Import cors
import userRoutes from './src/routes/users.js'; // Import user routes
import config from './src/config.js';
import swaggerSetup from './src/loaders/swagger.js'; // Import swagger setup

const app = express();
const port = config.port;

// Middleware
app.use(bodyParser.json());
app.use(cors()); // Use cors middleware

// MongoDB connection string with database name 'Trabajo'
mongoose.connect(config.mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// Routes
app.use('/api/users', userRoutes); // Use user routes

// Swagger setup
swaggerSetup(app);
//sdsds
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
