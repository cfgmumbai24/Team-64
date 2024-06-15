import { Router } from 'express';
import { handleGetAllStudents, handleAddStudent, handleGetStudentsByGrade } from './students.service.js';

export async function getAllStudents(req, res, next) {
  try {
    const students = await handleGetAllStudents();
    res.status(200).json({ success: true, message: 'Students fetched successfully', students });
  } catch (error) {
    console.error('Error fetching all students:', error);
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
      message: error.message,
    });
    next(error);
  }
}

export async function getStudentsByGrade(req, res, next) {
  try {
    let { grade } = req.params;
    console.log(`Fetching students for grade: ${grade}`);

    grade = grade.toUpperCase();

    if (!['A', 'B', 'C', 'D'].includes(grade)) {
      return res.status(400).json({
        success: false,
        message: 'Invalid grade parameter. Please use one of the following: A, B, C, D.',
      });
    }

    const students = await handleGetStudentsByGrade(grade);

    res.status(200).json({
      success: true,
      message: 'Students fetched successfully',
      students,
    });
  } catch (error) {
    console.error('Error fetching students by grade:', error);
    res.status(error.statusCode || 500).json({
      success: false,
      message: error.message,
    });
    next(error);
  }
}

export default () => {
  const app = Router();
  app.get('/', getAllStudents);
  app.post('/add', addStudent);
  app.get('/:grade', getStudentsByGrade); // Updated to use grade as a route parameter

  return app;
};
