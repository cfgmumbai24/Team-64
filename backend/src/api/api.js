import { Router } from 'express';
import studentRouter from './students/students.controller.js';
import marksRouter from './marks/marks.controller.js';

export default () => {
  const app = Router();
  app.use('/students', studentRouter());
  app.use('/marks', marksRouter());

  return app;
};
