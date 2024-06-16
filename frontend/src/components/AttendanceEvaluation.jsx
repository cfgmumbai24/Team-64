import React from "react";
import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";

const AttendanceEvaluation = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        {/* Sidebar */}
        <div className="col-md-3 p-0 fixed-top" style={{ height: "100vh" }}>
          <Sidebar />
        </div>

        {/* Main Content Area */}
        <div className="col-md-9 offset-md-3">
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              padding: "20px",
              marginTop: "125px",
              flexWrap: "wrap",
            }}
          >
            {/* Attendance Card */}
            <div
              className="card shadow"
              style={{ width: "300px", padding: "10px" }}
            >
              <img
                src="/attendanceLogo.png"
                className="card-img-top"
                alt="Attendance"
                height={250}
              />
              <div className="card-body">
                <h5 className="card-title">Attendance</h5>
                <p className="card-text">Mark the student's attendance</p>
                <Link
                  to="/attendancetable"
                  style={{ backgroundColor: "#526D82", color: "white" }}
                  className="btn "
                >
                  Mark Attendance
                </Link>
              </div>
            </div>

            {/* Evaluation Card */}
            <div
              className="card shadow"
              style={{ width: "300px", padding: "10px", marginRight: "50px" }}
            >
              <img
                src="/evaluationLogo.png"
                className="card-img-top"
                alt="Evaluation"
                height={250}
              />
              <div className="card-body">
                <h5 className="card-title">Evaluation</h5>
                <p className="card-text">Evaluate the student's progress</p>
                <Link
                  to="/evaluationtable"
                  className="btn "
                  style={{ backgroundColor: "#526D82", color: "white" }}
                >
                  Evaluate Students
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AttendanceEvaluation;
