// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

import Navbar from "./components/Navbar";
import Carousal from "./components/Carousal";
import Footer from "./components/Footer";
import About from "./components/About";
import GoatFellow from "./components/GoatFellowForm"
import ClassCards from "./components/ClassCards";
import AttendanceTable from "./components/AttendanceTable";
import AttendanceEvaluation from "./components/AttendanceEvaluation";
import EvaluationTable from "./components/EvaluationTable";
function App() {

  return (
    <>
      <Navbar></Navbar>
      <Carousal></Carousal>
      {/* <About></About> */}
      {/* <EducationFellow></EducationFellow> */}
      {/* <ClassCards></ClassCards> */}
      {/* <AttendanceEvaluation></AttendanceEvaluation> */}
      {/* <AttendanceTable></AttendanceTable> */}
      {/* <EvaluationTable></EvaluationTable> */}
      <GoatFellow></GoatFellow>
      <Footer></Footer> 
    </>
  )
}

export default App
