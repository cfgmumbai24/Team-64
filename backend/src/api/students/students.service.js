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
