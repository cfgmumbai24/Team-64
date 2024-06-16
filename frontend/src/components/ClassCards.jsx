import React from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";

const ClassCards = () => {
  const navigate = useNavigate();

  const navg = () => {
    navigate("/ae");
  };

  return (
    <div className="container-fluid">
      <div className="row">
        {/* Sidebar */}
        <div className="col-md-3 p-0 fixed-top" style={{ height: "100vh" }}>
          <Sidebar />
        </div>

        {/* Main Content Area */}
        <div style={{ marginTop: "70px" }} className="col-md-9 offset-md-3">
          <div className="container-fluid">
            <div className="row">
              <div className="col-sm-6 my-4">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">Class 1</h5>
                    <p className="card-text">Students of Class 1</p>
                    <button
                      onClick={navg}
                      className="btn"
                      style={{ backgroundColor: "#526D82", color: "white" }}
                    >
                      Go to class
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 my-4">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">Class 2</h5>
                    <p className="card-text">Students of Class 2</p>
                    <button
                      onClick={navg}
                      className="btn btn-success"
                      style={{ backgroundColor: "#526D82" }}
                    >
                      Go to Class
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 my-4">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">Class 3</h5>
                    <p className="card-text">Students of Class 3</p>
                    <button
                      onClick={navg}
                      className="btn btn-success"
                      style={{ backgroundColor: "#526D82" }}
                    >
                      Go to class
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 my-4">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">Class 4</h5>
                    <p className="card-text">Students of Class 4</p>
                    <button
                      onClick={navg}
                      className="btn btn-success"
                      style={{ backgroundColor: "#526D82" }}
                    >
                      Go to class
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 my-4">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">Class 5</h5>
                    <p className="card-text">Students of Class 5</p>
                    <button
                      onClick={navg}
                      className="btn btn-success"
                      style={{ backgroundColor: "#526D82" }}
                    >
                      Go to class
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClassCards;
