import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./components/About";
import GoatFellow from "./components/GoatFellowForm"
import ClassCards from "./components/ClassCards";
import AttendanceTable from "./components/AttendanceTable";
import AttendanceEvaluation from "./components/AttendanceEvaluation";
import EvaluationTable from "./components/EvaluationTable";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>

      <Navbar />
      <div className="container my-5">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default App;
