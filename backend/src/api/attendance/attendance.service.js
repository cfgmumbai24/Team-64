import db from '../../loaders/database.js';

export async function handleGetAttendanceByClass(classno) {
  try {
    const studentsCollection = (await db()).collection('students');
    const attendanceCollection = (await db()).collection('attendance');
    const students = await studentsCollection.find({ std: classno }).toArray();
    if (students.length === 0) {
      throw {
        statusCode: 404,
        message: `No students found for class ${classno}`,
      };
    }
    const studentIds = students.map(student => student._id);
    const attendanceRecords = await attendanceCollection.find({ stud_id: { $in: studentIds } }).toArray();
    if (attendanceRecords.length === 0) {
      throw {
        statusCode: 404,
        message: `No attendance records found for class ${classno}`,
      };
    }
    return attendanceRecords;
  } catch (error) {
    console.error('Error in handleGetAttendanceByClass:', error);
    throw {
      statusCode: error.statusCode || 500,
      message: error.message || 'An unexpected error occurred while fetching attendance.',
    };
  }
}

export async function handleGetAttendanceByGrade(grade) {
  try {
    const studentsCollection = (await db()).collection('students');
    const attendanceCollection = (await db()).collection('attendance');
    const students = await studentsCollection.find({ grade: grade }).toArray();
    if (students.length === 0) {
      throw {
        statusCode: 404,
        message: `No students found for class ${grade}`,
      };
    }
    const studentIds = students.map(student => student._id);
    const attendanceRecords = await attendanceCollection.find({ stud_id: { $in: studentIds } }).toArray();
    if (attendanceRecords.length === 0) {
      throw {
        statusCode: 404,
        message: `No attendance records found for grade ${grade}`,
      };
    }
    return attendanceRecords;
  } catch (error) {
    console.error('Error in handleGetAttendanceByGrade:', error);
    throw {
      statusCode: error.statusCode || 500,
      message: error.message || 'An unexpected error occurred while fetching attendance.',
    };
  }
}

export async function handleGetAttendanceByStudent(rollNo) {
  try {
    const studentsCollection = (await db()).collection('students');
    const attendanceCollection = (await db()).collection('attendance');
    const students = await studentsCollection.find({ roll_no: rollNo }).toArray();
    if (students.length === 0) {
      throw {
        statusCode: 404,
        message: `No student with ${rollNo} found`,
      };
    }
    const studentIds = students.map(student => student._id);
    const attendanceRecords = await attendanceCollection.find({ stud_id: { $in: studentIds } }).toArray();
    if (attendanceRecords.length === 0) {
      throw {
        statusCode: 404,
        message: `No attendance records found for rollNo ${rollNo}`,
      };
    }
    return attendanceRecords;
  } catch (error) {
    console.error('Error in handleGetAttendanceByStudent:', error);
    throw {
      statusCode: error.statusCode || 500,
      message: error.message || 'An unexpected error occurred while fetching attendance.',
    };
  }
}

export async function handleUpdateAttendance(classno, attendanceData) {
  const { date, attendance } = attendanceData;

  if (!date || !Array.isArray(attendance) || attendance.length === 0) {
    throw {
      statusCode: 400,
      message: 'Invalid attendance data. Please check the input format.',
    };
  }

  try {
    const studentsCollection = (await db()).collection('students');
    const attendanceCollection = (await db()).collection('attendance');
    const rollNumbers = attendance.map(entry => entry.roll_no);
    const students = await studentsCollection
      .find({
        roll_no: { $in: rollNumbers },
        std: classno,
      })
      .toArray();

    if (students.length === 0) {
      throw {
        statusCode: 404,
        message: `No students found with the provided roll numbers in class ${classno}.`,
      };
    }
    const attendanceEntries = students.map(student => {
      const attendanceRecord = attendance.find(entry => entry.roll_no === student.roll_no);
      return {
        date,
        stud_id: student._id,
        present: attendanceRecord.present,
      };
    });
    const result = await attendanceCollection.insertMany(attendanceEntries);

    if (result.insertedCount === 0) {
      throw new Error('Failed to update attendance records.');
    }

    return {
      statusCode: 201,
      message: 'Attendance updated successfully',
      insertedCount: result.insertedCount,
    };
  } catch (error) {
    console.error('Error updating attendance:', error);
    throw {
      statusCode: error.statusCode || 500,
      message: error.message || 'An unexpected error occurred while updating attendance.',
    };
  }
}
