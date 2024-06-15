import { Router } from 'express';
import studentRouter from './students/students.controller.js';

export default () => {
  const app = Router();
  app.use('/students', studentRouter());

  return app;
};
