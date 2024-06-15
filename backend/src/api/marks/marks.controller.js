import { Router } from 'express';
import { handleAddMarks, handleGetMarksByRollNo } from './marks.service.js';

export async function addMarks(req, res, next) {
  try {
    const marksData = req.body;
    const result = await handleAddMarks(marksData);

    res.status(result.statusCode).json({
      success: true,
      message: result.message,
      modifiedCount: result.modifiedCount,
      upsertedId: result.upsertedId,
    });
  } catch (error) {
    console.error('Error adding marks:', error);

    res.status(error.statusCode || 500).json({
      success: false,
      message: error.message || 'An unexpected error occurred while adding marks.',
    });

    next(error);
  }
}

export async function getMarksByRollNo(req, res, next) {
  try {
    const { roll_no } = req.params;
    const result = await handleGetMarksByRollNo(roll_no);
    res.status(result.statusCode).json({
      success: true,
      message: result.message,
      marks: result.marks,
    });
  } catch (error) {
    console.error('Error fetching marks:', error);
    res.status(error.statusCode || 500).json({
      success: false,
      message: error.message,
    });
    next(error);
  }
}

export default () => {
  const app = Router();

  app.post('/add', addMarks);
  app.get('/:roll_no', getMarksByRollNo);

  return app;
};



