import express from 'express';
import routes from './routes/index.js';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

app.use(express.json()); // Para poder leer JSON en los requests
app.use('/api', routes); // Monta las rutas en `/api`

export default app;
