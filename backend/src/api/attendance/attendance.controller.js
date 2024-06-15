import { Router } from 'express';
import { handleUpdateAttendance } from './attendance.service.js';

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
  app.post('/:classno', updateAttendance);

  return app;
};
