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
    const studentsCollection = (await db()).collection('marks');
    const totalMarks = marksData.numeric + marksData.read_write + marksData.emotional;
    const student = await studentsCollection.findOne({ roll_no: marksData.roll_no });

    if (student) {
      if (!Array.isArray(student.arithmetic_marks)) {
        await studentsCollection.updateOne(
          { roll_no: marksData.roll_no },
          { $set: { arithmetic_marks: student.arithmetic_marks ? [student.arithmetic_marks] : [] } },
        );
      }
      if (!Array.isArray(student.read_write_marks)) {
        await studentsCollection.updateOne(
          { roll_no: marksData.roll_no },
          { $set: { read_write_marks: student.read_write_marks ? [student.read_write_marks] : [] } },
        );
      }
      if (!Array.isArray(student.socio_emo_marks)) {
        await studentsCollection.updateOne(
          { roll_no: marksData.roll_no },
          { $set: { socio_emo_marks: student.socio_emo_marks ? [student.socio_emo_marks] : [] } },
        );
      }
      if (!Array.isArray(student.total_marks)) {
        await studentsCollection.updateOne(
          { roll_no: marksData.roll_no },
          { $set: { total_marks: student.total_marks ? [student.total_marks] : [] } },
        );
      }
    }
    const result = await studentsCollection.updateOne(
      { roll_no: marksData.roll_no },
      {
        $push: {
          arithmetic_marks: marksData.numeric,
          read_write_marks: marksData.read_write,
          socio_emo_marks: marksData.emotional,
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
