const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());

// MongoDB connection string with database name 'TFGd'
const mongoURI = 'mongodb+srv://juantornay:juan12345@cluster0.k91vk.mongodb.net/TFGd?retryWrites=true&w=majority';

mongoose.connect(mongoURI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// User model
const userSchema = new mongoose.Schema({
  username: String,
  password: String,
  email: String
}, { collection: 'usuarios' });

const User = mongoose.model('User', userSchema);

// Registration route
app.post('/register', async (req, res) => {
  const { username, password, email } = req.body;
  const user = new User({ username, password, email });
  try {
    await user.save();
    res.status(201).send('User registered successfully');
  } catch (error) {
    res.status(400).send('Error registering user');
  }
});

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
