import db from '../../loaders/database.js';
export async function handleGetSocioEmoQuestions() {
  try {
    const questionsCollection = (await db()).collection('socio_emo_questions');
    const questions = await questionsCollection.find().toArray();
    if (!questions) {
      throw {
        statusCode: 404,
        message: 'No socio-emotional questions found',
      };
    }
    return questions;
  } catch (error) {
    console.error('Error fetching socio-emotional questions:', error);
    throw {
      statusCode: 500,
      message: `Database error: ${error.message}`,
    };
  }
}

export async function handleAddSocioEmoQuestion(questionData) {
  if (!questionData.category || !questionData.month || !questionData.question) {
    throw {
      statusCode: 400,
      message: 'Invalid question data. Please check the input format.',
    };
  }

  try {
    const questionsCollection = (await db()).collection('socio_emo_questions');
    const result = await questionsCollection.insertOne(questionData);

    if (!result.insertedId) {
      throw new Error('Failed to add socio-emotional question');
    }

    return {
      statusCode: 201,
      message: 'Socio-emotional question added successfully',
      questionId: result.insertedId,
    };
  } catch (error) {
    console.error('Error adding socio-emotional question:', error);
    throw {
      statusCode: 500,
      message: `Database error: ${error.message}`,
    };
  }
}
