import db from '../../loaders/database.js';

export async function handleGetAllStudents() {
  const studentsCollection = (await db()).collection('students');
  const students = await studentsCollection.find().toArray();
  if (!students) {
    throw {
      statusCode: 404,
      message: 'Error in fetching students',
    };
  }
  return students;
}

export async function handleAddStudent(studentData) {
  if (
    !studentData.name ||
    !studentData.roll_no ||
    !studentData.std ||
    !studentData.grade ||
    typeof studentData.arithmetic_marks !== 'number' ||
    typeof studentData.read_write_marks !== 'number' ||
    typeof studentData.socio_emo_marks !== 'number' ||
    typeof studentData.total_marks !== 'number' ||
    !Array.isArray(studentData.attendance)
  ) {
    throw {
      statusCode: 400,
      message: 'Invalid student data. Please check the input format.',
    };
  }
  try {
    const studentsCollection = (await db()).collection('students');
    const result = await studentsCollection.insertOne(studentData);
    if (!result.insertedId) {
      throw new Error('Failed to add student');
    }
    return {
      statusCode: 201,
      message: 'Student added successfully',
      studentId: result.insertedId,
    };
  } catch (error) {
    throw {
      statusCode: 500,
      message: `Database error: ${error.message}`,
    };
  }
}

export async function handleGetStudentsByGrade(grade) {
  try {
    const studentsCollection = (await db()).collection('students');
    const students = await studentsCollection.find({ grade }).toArray();
    if (!students.length) {
      throw {
        statusCode: 404,
        message: 'No students found for the specified grade',
      };
    }
    return students;
  } catch (error) {
    throw {
      statusCode: 500,
      message: `Database error: ${error.message}`,
    };
  }
}
