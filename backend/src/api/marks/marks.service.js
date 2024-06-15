import db from '../../loaders/database.js';

export async function handleAddMarks(marksData) {
  if (
    !marksData.roll_no ||
    typeof marksData.numeric !== 'number' ||
    typeof marksData.read_write !== 'number' ||
    typeof marksData.emotional !== 'number'
  ) {
    throw {
      statusCode: 400,
      message: 'Invalid marks data. Please check the input format.',
    };
  }

  try {
    const marksCollection = (await db()).collection('marks');

    // Calculate total marks
    marksData.total = marksData.numeric + marksData.read_write + marksData.emotional;

    const result = await marksCollection.insertOne(marksData);
    if (!result.insertedId) {
      throw new Error('Failed to add marks');
    }

    return {
      statusCode: 201,
      message: 'Marks added successfully',
      marksId: result.insertedId,
    };
  } catch (error) {
    throw {
      statusCode: 500,
      message: `Database error: ${error.message}`,
    };
  }
}

export async function handleGetMarksByRollNo(rollNo) {
  try {
    const marksCollection = (await db()).collection('marks');

    // Find the marks with the provided roll_no
    const marks = await marksCollection.findOne({ roll_no: rollNo });
    if (!marks) {
      throw {
        statusCode: 404,
        message: 'Marks not found for the given roll number',
      };
    }

    return {
      statusCode: 200,
      message: 'Marks fetched successfully',
      marks,
    };
  } catch (error) {
    throw {
      statusCode: 500,
      message: `Database error: ${error.message}`,
    };
  }
}
