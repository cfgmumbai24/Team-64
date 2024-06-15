import { Router } from 'express';
import studentRouter from './students/students.controller.js';
import marksRouter from './marks/marks.controller.js';
import attendanceRouter from './attendance/attendance.controller.js';

export default () => {
  const app = Router();
  app.use('/students', studentRouter());
  app.use('/marks', marksRouter());
  app.use('/attendance', attendanceRouter());
  return app;
};
