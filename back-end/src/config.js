export default {
  port: process.env.PORT || 5000,
  mongoURI: process.env.MONGO_URI || 'mongodb+srv://tornayjuan04:juan12345@trabajo.4t4ub8q.mongodb.net/tfg?retryWrites=true&w=majority',
  jwtSecret: process.env.JWT_SECRET || 'supersecreto'
};
