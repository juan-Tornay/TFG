export default {
  port: process.env.PORT || 5000,
  mongoURI: process.env.MONGO_URI || 'mongodb+srv://juantornayiglesiasweb:juan12345@cluster0.yjmbn.mongodb.net/Trabajo?retryWrites=true&w=majority',
  jwtSecret: process.env.JWT_SECRET || 'supersecreto'
};
