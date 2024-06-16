import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";

const AttendanceTable = () => {
  const [students, setStudents] = useState([]);
  const [attendance, setAttendance] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const classNo = 6;

  useEffect(() => {
    const fetchStudents = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(
          `http://localhost:5050/api/students?classno=${classNo}`
        );
        if (response.ok) {
          const studentsData = await response.json();
          setStudents(studentsData.students);
          setAttendance(
            studentsData.students.reduce((acc, student) => {
              acc[student.roll_no] = false; // Initialize attendance to false (absent)
              return acc;
            }, {})
          );
        } else {
          setError("Failed to fetch students");
        }
      } catch (error) {
        setError("Error fetching students");
      } finally {
        setLoading(false);
      }
    };

    fetchStudents();
  }, [classNo]);

  const handleCheckboxChange = (roll_no) => {
    setAttendance((prevAttendance) => ({
      ...prevAttendance,
      [roll_no]: !prevAttendance[roll_no], // Toggle attendance status
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const attendanceData = {
      date: new Date().toISOString(),
      attendance: students.map((student) => ({
        roll_no: student.roll_no,
        present: attendance[student.roll_no],
      })),
    };

    try {
      const response = await fetch(
        `http://localhost:5050/api/attendance/${classNo}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(attendanceData),
        }
      );

      if (response.ok) {
        const result = await response.json();
        console.log(result);
        navigate("/classcards");
      } else {
        const errorData = await response.json();
        console.error("Error updating attendance:", errorData);
        throw new Error(errorData.message || "Failed to update attendance");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while updating attendance. Please try again.");
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="container-fluid">
      <div className="row">
        {/* Sidebar */}
        <div className="col-md-3 p-0 fixed-top" style={{ height: "100vh" }}>
          <Sidebar />
        </div>

        {/* Main Content Area */}
        <div className="col-md-9 offset-md-3">
          <div className="p-4">
            <h2 className="text-center mb-4">Student Attendance</h2>
            <form onSubmit={handleSubmit}>
              <div className="table-responsive">
                <table className="table table-bordered">
                  <thead className="thead-dark">
                    <tr>
                      <th style={{ minWidth: "120px" }}>Roll No</th>
                      <th>Name</th>
                      <th style={{ minWidth: "100px" }}>Present</th>
                    </tr>
                  </thead>
                  <tbody>
                    {students.map((student) => (
                      <tr key={student.roll_no}>
                        <td>{student.roll_no}</td>
                        <td>{student.name}</td>
                        <td className="text-center">
                          <input
                            type="checkbox"
                            checked={attendance[student.roll_no]}
                            onChange={() =>
                              handleCheckboxChange(student.roll_no)
                            }
                          />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="text-center mt-4">
                <button
                  type="submit"
                  className="btn btn-success"
                  style={{
                    backgroundColor: "#526D82",
                    color: "white",
                    width: "200px",
                  }}
                >
                  Submit Attendance
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AttendanceTable;
