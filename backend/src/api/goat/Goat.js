// models/Goat.js
import mongoose from 'mongoose';

const goatSchema = new mongoose.Schema({
  milkInLitres: { type: Number, required: true },
  age: { type: Number, required: true },
  height: { type: Number, required: true },
  weight: { type: Number, required: true },
  isPregnant: { type: String, required: true, enum: ['Yes', 'No'] }, // Assuming "Yes" or "No" as valid values
  behaviour: { type: String, required: true },
  gender: { type: String, required: true, enum: ['Male', 'Female'] }, // Assuming "Male" or "Female" as valid values
  grassIntake: { type: Number, required: true },
});

const Goat = mongoose.model('Goat', goatSchema);

export default Goat;
