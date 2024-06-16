import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

import userRegister from './user/userRegister.js'; 

import userRegister from './user/userRegister.js'; 
import pkg2 from '../config.js';
const { databaseURL } = pkg2;

const app = express();
const port = 5050;

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

app.post('/register', async (req, res) => {
  const { username, email, password, role } = req.body;

  try {
    const existingUser = await userRegister.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    const newUser = new userRegister({ username, email, password, role });

    await newUser.save();

    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
});

app.post('/goat', async (req, res) => {
  const { milkInLitres, age, height, weight, isPregnant, behaviour, gender, grassIntake } = req.body;

  try {

    const newGoat = new Goat({ milkInLitres, age, height, weight, isPregnant, behaviour, gender, grassIntake });
    await newGoat.save();

    res.status(201).json({ message: 'Goat registered successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
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