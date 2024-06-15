import { Router } from 'express';
import { handleGetAllStudents } from './students.service.js';

export async function getAllStudents(req, res, next) {
  try {
    const students = await handleGetAllStudents();
    res.status(200).json({ success: true, message: 'Students fetched successfully', students });
  } catch (error) {
    next(error);
  }
}

export default () => {
  const app = Router();
  app.get('/', getAllStudents);
  return app;
};
