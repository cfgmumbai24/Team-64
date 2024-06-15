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


export const getAttendenceByclass = async (grade) => {
  try {
    const url = `http://localhost/api/attendance/grade/${grade}`; // Adjusted endpoint URL

    const res = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        // Optionally, you can include Authorization header for authentication
        // 'Authorization': `Bearer ${accessToken}`
      },
    });

    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error('Error fetching attendance by grade:', error);
    throw error;
  }
};


export const getAttendanceByStudent = async (rollNo) => {
  try {
    const url = `http://localhost/api/attendance/student/${rollNo}`; // Adjusted endpoint URL

    const res = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        // Optionally, you can include Authorization header for authentication
        // 'Authorization': `Bearer ${accessToken}`
      },
    });

    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error('Error fetching attendance by student:', error);
    throw error;
  }
};
