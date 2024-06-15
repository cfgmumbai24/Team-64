import React, { useState } from 'react';

const EvaluationTable = () => {
  // Generate mock data for 20 students
  const initialStudents = Array.from({ length: 20 }, (_, index) => ({
    id: index + 1,
    name: `Student ${index + 1}`,
    readingWritingMarks: '',
    arithmeticMarks: '',
    socioEmotionalMarks: '',
  }));

  const [students, setStudents] = useState(initialStudents);

  const handleInputChange = (id, field, value) => {
    const numericValue = parseInt(value, 10);
    if (numericValue >= 1 && numericValue <= 10) {
      setStudents(students.map(student => (
        student.id === id ? { ...student, [field]: numericValue } : student
      )));
    }
  };

  const handleUpdate = (id) => {
    const student = students.find(student => student.id === id);
    alert(`Updated marks for ${student.name}:\nReading/Writing: ${student.readingWritingMarks}\nArithmetic: ${student.arithmeticMarks}\nSocio-Emotional: ${student.socioEmotionalMarks}`);
    // Here you would typically send the updated data to the backend
  };

  return (
    <div className='d-flex flex-column justify-content-center container'>
      <h2 className='text-center'>Student Attendance and Marks</h2>
      <table border="1">
        <thead>
          <tr>
            <th>Student ID</th>
            <th>Name</th>
            <th>Reading/Writing (1-10)</th>
            <th>Arithmetic (1-10)</th>
            <th>Socio-Emotional (1-10)</th>
            <th>Update</th>
          </tr>
        </thead>
        <tbody>
          {students.map(student => (
            <tr key={student.id}>
              <td>{student.id}</td>
              <td>{student.name}</td>
              <td>
                <input
                  type="number"
                  min="1"
                  max="10"
                  value={student.readingWritingMarks}
                  onChange={(e) => handleInputChange(student.id, 'readingWritingMarks', e.target.value)}
                />
              </td>
              <td>
                <input
                  type="number"
                  min="1"
                  max="10"
                  value={student.arithmeticMarks}
                  onChange={(e) => handleInputChange(student.id, 'arithmeticMarks', e.target.value)}
                />
              </td>
              <td>
                <input
                  type="number"
                  min="1"
                  max="10"
                  value={student.socioEmotionalMarks}
                  onChange={(e) => handleInputChange(student.id, 'socioEmotionalMarks', e.target.value)}
                />
              </td>
              <td>
                <button className='btn btn-primary' onClick={() => handleUpdate(student.id)}>Update</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default EvaluationTable;
