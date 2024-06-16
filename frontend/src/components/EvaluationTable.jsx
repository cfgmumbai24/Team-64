import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";

const EvaluationTable = () => {
  const [students, setStudents] = useState([]);
  const [questions, setQuestions] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchStudents();
    fetchQuestions();
  }, []);

  const fetchStudents = async () => {
    try {
      const response = await fetch("http://localhost:5050/api/students");
      if (response.ok) {
        const studentsData = await response.json();
        setStudents(
          studentsData.students.map((student) => ({
            ...student,
            readingWritingMarks: student.readingWritingMarks || "",
            arithmeticMarks: student.arithmeticMarks || "",
            socioEmotionalMarks: {
              ...student.socioEmotionalMarks,
              ...Object.fromEntries(
                questions.map((question) => [
                  question.field,
                  student.socioEmotionalMarks[question.field] || "",
                ])
              ),
            },
          }))
        );
      } else {
        console.error("Failed to fetch students:", response.statusText);
      }
    } catch (error) {
      console.error("Error fetching students:", error);
    }
  };

  const fetchQuestions = async () => {
    try {
      const response = await fetch("http://localhost:5050/api/questions");
      if (response.ok) {
        const questionsData = await response.json();
        setQuestions(questionsData.questions);
      } else {
        console.error("Failed to fetch questions:", response.statusText);
      }
    } catch (error) {
      console.error("Error fetching questions:", error);
    }
  };

  const handleInputChange = (id, field, value) => {
    const numericValue = parseInt(value, 10);
    if (!isNaN(numericValue) && numericValue >= 1 && numericValue <= 10) {
      setStudents((prevStudents) =>
        prevStudents.map((student) =>
          student.id === id ? { ...student, [field]: numericValue } : student
        )
      );
    }
  };

  const handleQuestionInputChange = (id, field, value) => {
    const numericValue = parseInt(value, 10);
    if (!isNaN(numericValue) && numericValue >= 1 && numericValue <= 10) {
      setStudents((prevStudents) =>
        prevStudents.map((student) =>
          student.id === id
            ? {
                ...student,
                socioEmotionalMarks: {
                  ...student.socioEmotionalMarks,
                  [field]: numericValue,
                },
              }
            : student
        )
      );
    }
  };

  const handleUpdate = async (id) => {
    try {
      const student = students.find((student) => student.id === id);
      if (!student) {
        throw new Error(`Student with ID ${id} not found.`);
      }

      const marksData = {
        roll_no: student.roll_no,
        numeric: parseInt(student.arithmeticMarks, 10) || 1,
        read_write: parseInt(student.readingWritingMarks, 10) || 2,
        socio_emo_marks: {
          self_awareness:
            parseInt(student.socioEmotionalMarks.self_awareness, 10) || 1,
          confidence: parseInt(student.socioEmotionalMarks.confidence, 10) || 2,
          hygiene: parseInt(student.socioEmotionalMarks.hygiene, 10) || 3,
          relationship_behavior:
            parseInt(student.socioEmotionalMarks.relationship_behavior, 10) ||
            4,
          social_awareness:
            parseInt(student.socioEmotionalMarks.social_awareness, 10) || 5,
          ownership: parseInt(student.socioEmotionalMarks.ownership, 10) || 6,
        },
      };

      console.log(marksData);

      const response = await fetch(`http://localhost:5050/api/marks/add`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(marksData),
      });

      if (response.ok) {
        alert(`Updated marks for ${student.name} successfully.`);
      } else {
        const errorData = await response.json();
        console.error("Error updating marks:", errorData.message);
        throw new Error(errorData.message || "Failed to update marks");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while updating marks. Please try again.");
    }
  };

  const handleSubmit = (e, id) => {
    e.preventDefault();
    handleUpdate(id);
  };

  return (
    <div className="container mt-5">
      <div className="col-md-3 p-0 fixed-top" style={{ height: "100vh" }}>
        <Sidebar />
      </div>
      <h2 className="text-center mb-4">Student Evaluation Table</h2>
      <div style={{ marginLeft: "160px" }} className="table-responsive">
        <table className="table table-bordered">
          <thead className="thead-dark">
            <tr>
              <th>Roll Number</th>
              <th>Name</th>
              <th>Reading/Writing (1-10)</th>
              <th>Arithmetic (1-10)</th>
              <th>Socio-Emotional (1-10 per question)</th>
              <th>Update</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <tr key={student.id}>
                <td>{student.roll_no}</td>
                <td>{student.name}</td>
                <td>
                  <input
                    type="number"
                    className="form-control"
                    min="1"
                    max="10"
                    name="readingWritingMarks"
                    value={student.readingWritingMarks}
                    onChange={(e) =>
                      handleInputChange(
                        student.id,
                        "readingWritingMarks",
                        e.target.value
                      )
                    }
                  />
                </td>
                <td>
                  <input
                    type="number"
                    className="form-control"
                    min="1"
                    max="10"
                    name="arithmeticMarks"
                    value={student.arithmeticMarks}
                    onChange={(e) =>
                      handleInputChange(
                        student.id,
                        "arithmeticMarks",
                        e.target.value
                      )
                    }
                  />
                </td>
                <td>
                  {questions.map((question) => (
                    <div key={question.id}>
                      <label>{question.question}</label>
                      <input
                        type="number"
                        className="form-control"
                        min="1"
                        max="10"
                        value={
                          student.socioEmotionalMarks[question.field] || ""
                        }
                        onChange={(e) =>
                          handleQuestionInputChange(
                            student.id,
                            question.field,
                            e.target.value
                          )
                        }
                      />
                    </div>
                  ))}
                </td>
                <td>
                  <button
                    type="submit"
                    className="btn btn-success"
                    style={{ backgroundColor: "#526D82" }}
                    onClick={(e) => handleSubmit(e, student.id)}
                  >
                    Update
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EvaluationTable;
