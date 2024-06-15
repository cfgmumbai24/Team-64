import { Router } from 'express';
import { handleGetSocioEmoQuestions, handleAddSocioEmoQuestion } from './questions.service.js';

export async function getSocioEmoQuestions(req, res, next) {
  try {
    const questions = await handleGetSocioEmoQuestions();
    res.status(200).json({
      success: true,
      message: 'Socio-emotional questions fetched successfully',
      questions,
    });
  } catch (error) {
    console.error('Error fetching socio-emotional questions:', error);
    res.status(error.statusCode || 500).json({
      success: false,
      message: error.message || 'An unexpected error occurred while fetching socio-emotional questions.',
    });
    next(error);
  }
}

export async function addSocioEmoQuestion(req, res, next) {
  try {
    const questionData = req.body;
    const result = await handleAddSocioEmoQuestion(questionData);

    res.status(result.statusCode).json({
      success: true,
      message: result.message,
      questionId: result.questionId,
    });
  } catch (error) {
    console.error('Error adding socio-emotional question:', error);
    res.status(error.statusCode || 500).json({
      success: false,
      message: error.message || 'An unexpected error occurred while adding the socio-emotional question.',
    });
    next(error);
  }
}

export default () => {
  const app = Router();
  app.get('/', getSocioEmoQuestions);
  app.post('/add', addSocioEmoQuestion);

  return app;
};
