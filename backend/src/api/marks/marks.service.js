import db from '../../loaders/database.js';

export async function handleAddMarks(marksData) {
  if (
    !marksData.roll_no ||
    typeof marksData.numeric !== 'number' ||
    typeof marksData.read_write !== 'number' ||
    !marksData.socio_emo_marks ||
    typeof marksData.socio_emo_marks.self_awareness !== 'number' ||
    typeof marksData.socio_emo_marks.confidence !== 'number' ||
    typeof marksData.socio_emo_marks.hygiene !== 'number' ||
    typeof marksData.socio_emo_marks.relationship_behavior !== 'number' ||
    typeof marksData.socio_emo_marks.social_awareness !== 'number' ||
    typeof marksData.socio_emo_marks.ownership !== 'number'
  ) {
    throw {
      statusCode: 400,
      message: 'Invalid marks data. Please check the input format.',
    };
  }

  try {
    const studentsCollection = (await db()).collection('marks');
    const socioEmoMarks = marksData.socio_emo_marks;
    const totalSocioEmoMarks = Object.values(socioEmoMarks).reduce((acc, val) => acc + val, 0);
    const totalMarks = marksData.numeric + marksData.read_write + totalSocioEmoMarks;
    const result = await studentsCollection.updateOne(
      { roll_no: marksData.roll_no },
      {
        $push: {
          arithmetic_marks: marksData.numeric,
          read_write_marks: marksData.read_write,
          'socio_emo_marks.self_awareness': socioEmoMarks.self_awareness,
          'socio_emo_marks.confidence': socioEmoMarks.confidence,
          'socio_emo_marks.hygiene': socioEmoMarks.hygiene,
          'socio_emo_marks.relationship_behavior': socioEmoMarks.relationship_behavior,
          'socio_emo_marks.social_awareness': socioEmoMarks.social_awareness,
          'socio_emo_marks.ownership': socioEmoMarks.ownership,
          total_marks: totalMarks,
        },
      },
      { upsert: true },
    );

    if (result.modifiedCount === 0 && result.upsertedCount === 0) {
      throw new Error('Failed to add marks');
    }

    return {
      statusCode: 201,
      message: 'Marks added successfully',
      modifiedCount: result.modifiedCount,
      upsertedId: result.upsertedId ? result.upsertedId._id : null,
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
    const studentsCollection = (await db()).collection('marks');
    const student = await studentsCollection.findOne({ roll_no: rollNo });
    if (!student) {
      throw {
        statusCode: 404,
        message: 'Marks not found for the given roll number',
      };
    }

    return {
      statusCode: 200,
      message: 'Marks fetched successfully',
      marks: {
        arithmetic_marks: student.arithmetic_marks || [],
        read_write_marks: student.read_write_marks || [],
        socio_emo_marks: student.socio_emo_marks || [],
        total_marks: student.total_marks || [],
      },
    };
  } catch (error) {
    throw {
      statusCode: 500,
      message: `Database error: ${error.message}`,
    };
  }
}
