import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import userRegister from './user/userRegister.js'; // Adjust the path as needed
import pkg2 from '../config.js';
const { databaseURL } = pkg2;

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

const connectDB = async () => {
  try {
    await mongoose.connect(databaseURL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    process.exit(1);
  }
};

connectDB();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.post('/login', async (req, res) => {
  console.log(req.body);

  try {
    const user = await userRegister.findOne({ email: req.body.email });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    let isPasswordValid;

    if (req.body.password == user.password) {
      isPasswordValid = true;
    } else {
      isPasswordValid = false;
    }
    console.log(isPasswordValid);
    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Invalid password' });
    }

    res.status(200).json({ message: 'Login successful', user: user });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
