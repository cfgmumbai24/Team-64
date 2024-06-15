import React, { useState } from 'react';

const mockStudents = [
  { roll_no: '1', name: 'John Doe' },
  { roll_no: '2', name: 'Jane Smith' },
  { roll_no: '3', name: 'Michael Brown' },
  { roll_no: '4', name: 'Emily Davis' },
  { roll_no: '5', name: 'David Wilson' },
  { roll_no: '6', name: 'Sarah Johnson' },
  { roll_no: '7', name: 'Chris Lee' },
  { roll_no: '8', name: 'Amanda Martinez' },
  { roll_no: '9', name: 'Jessica Garcia' },
  { roll_no: '10', name: 'Daniel Rodriguez' },
  { roll_no: '11', name: 'Laura Perez' },
  { roll_no: '12', name: 'James White' },
  { roll_no: '13', name: 'Linda Harris' },
  { roll_no: '14', name: 'Brian Clark' },
  { roll_no: '15', name: 'Elizabeth Lewis' },
  { roll_no: '16', name: 'Matthew Walker' },
  { roll_no: '17', name: 'Nancy Hall' },
  { roll_no: '18', name: 'Kevin Young' },
  { roll_no: '19', name: 'Angela Allen' },
  { roll_no: '20', name: 'Patrick Scott' },
];

const AttendanceTable = () => {
  const [attendance, setAttendance] = useState(
    mockStudents.reduce((acc, student) => {
      acc[student.roll_no] = false;
      return acc;
    }, {})
  );

  const handleCheckboxChange = (roll_no) => {
    setAttendance((prevAttendance) => ({
      ...prevAttendance,
      [roll_no]: !prevAttendance[roll_no],
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Submitted Attendance:', attendance);
    // Add your logic to handle attendance submission
  };

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
      <h2 style={{ textAlign: 'center' }}>Student Attendance</h2>
      <form onSubmit={handleSubmit}>
        <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '20px' }}>
          <thead>
            <tr>
              <th style={{ border: '1px solid #ccc', padding: '8px' }}>Roll No</th>
              <th style={{ border: '1px solid #ccc', padding: '8px' }}>Name</th>
              <th style={{ border: '1px solid #ccc', padding: '8px' }}>Present</th>
            </tr>
          </thead>
          <tbody>
            {mockStudents.map((student) => (
              <tr key={student.roll_no}>
                <td style={{ border: '1px solid #ccc', padding: '8px' }}>{student.roll_no}</td>
                <td style={{ border: '1px solid #ccc', padding: '8px' }}>{student.name}</td>
                <td style={{ border: '1px solid #ccc', padding: '8px', textAlign: 'center' }}>
                  <input
                    type="checkbox"
                    checked={attendance[student.roll_no]}
                    onChange={() => handleCheckboxChange(student.roll_no)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <button type="submit" style={{ width: '100%', padding: '10px', backgroundColor: '#4CAF50', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
          Submit Attendance
        </button>
      </form>
    </div>
  );
};

export default AttendanceTable;