import { Router } from 'express';
import { handleGetAllStudents, handleAddStudent } from './students.service.js';
export async function getAllStudents(req, res, next) {
  try {
    const students = await handleGetAllStudents();
    res.status(200).json({
      success: true,
      message: 'Students fetched successfully',
      students,
    });
  } catch (error) {
    console.error('Error fetching students:', error);
    res.status(error.statusCode || 500).json({
      success: false,
      message: error.message || 'An unexpected error occurred while fetching students.',
    });
    next(error);
  }
}
export async function addStudent(req, res, next) {
  try {
    const studentData = req.body;
    const result = await handleAddStudent(studentData);
    res.status(result.statusCode).json({
      success: true,
      message: result.message,
      studentId: result.studentId,
    });
  } catch (error) {
    console.error('Error adding student:', error);
    res.status(error.statusCode || 500).json({
      success: false,
      message: error.message || 'An unexpected error occurred while adding the student.',
    });
    next(error);
  }
}

export default () => {
  const app = Router();
  app.get('/', getAllStudents);
  app.post('/add', addStudent);

  return app;
};
