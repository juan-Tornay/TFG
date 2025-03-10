import mongoose from 'mongoose';
import config from '../config.js';

export default async () => {
  try {
    await mongoose.connect(config.mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 30000, // Aumenta el tiempo de espera a 30 segundos
      socketTimeoutMS: 45000 // Aumenta el tiempo de espera del socket a 45 segundos
    });
    console.log('MongoDB connected');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    throw error;
  }
};
