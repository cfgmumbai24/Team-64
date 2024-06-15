// models/userRegister.js
import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, default: 'goat-mitra' }
});

const userRegister = mongoose.model('userRegister', userSchema);

export default userRegister;
