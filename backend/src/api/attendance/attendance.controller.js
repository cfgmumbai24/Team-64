import { Router } from 'express';
import {
  handleGetAttendanceByClass,
  handleUpdateAttendance,
  handleGetAttendanceByGrade,
  handleGetAttendanceByStudent,
} from './attendance.service.js';

export async function getAttendanceByClass(req, res, next) {
  try {
    const { classno } = req.params;
    const attendance = await handleGetAttendanceByClass(classno);
    res.status(200).json({
      success: true,
      message: `Attendance fetched successfully for class ${classno}`,
      attendance,
    });
  } catch (error) {
    console.error('Error fetching attendance:', error);
    res.status(error.statusCode || 500).json({
      success: false,
      message: error.message || 'An unexpected error occurred while fetching attendance',
    });
    next(error);
  }
}

export async function getAttendanceByGrade(req, res, next) {
  try {
    const { grade } = req.params;
    const attendance = await handleGetAttendanceByGrade(grade);
    res.status(200).json({
      success: true,
      message: `Attendance fetched successfully for grade ${grade}`,
      attendance,
    });
  } catch (error) {
    console.error('Error fetching attendance:', error);
    res.status(error.statusCode || 500).json({
      success: false,
      message: error.message || 'An unexpected error occurred while fetching attendance',
    });
    next(error);
  }
}

export async function getAttendanceByStudent(req, res, next) {
  try {
    const { rollNo } = req.params;
    const attendance = await handleGetAttendanceByStudent(rollNo);
    res.status(200).json({
      success: true,
      message: `Attendance fetched successfully for roll no ${rollNo}`,
      attendance,
    });
  } catch (error) {
    console.error('Error fetching attendance:', error);
    res.status(error.statusCode || 500).json({
      success: false,
      message: error.message || 'An unexpected error occurred while fetching attendance',
    });
    next(error);
  }
}

export async function updateAttendance(req, res, next) {
  try {
    const classno = req.params.classno;
    const attendanceData = req.body;

    const result = await handleUpdateAttendance(classno, attendanceData);

    res.status(result.statusCode).json({
      success: true,
      message: result.message,
      insertedCount: result.insertedCount,
    });
  } catch (error) {
    console.error('Error in updateAttendance controller:', error);
    res.status(error.statusCode || 500).json({
      success: false,
      message: error.message,
    });
    next(error);
  }
}

export default () => {
  const app = Router();
  app.get('/class/:classno', getAttendanceByClass);
  app.get('/grade/:grade', getAttendanceByGrade);
  app.get('/student/:rollNo', getAttendanceByStudent);
  app.post('/:classno', updateAttendance);
  return app;
};
