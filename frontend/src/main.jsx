import React from "react";
import ReactDOM from "react-dom/client";
import {
  Route,
  Routes,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  BrowserRouter,
} from "react-router-dom";
import App from "./App";
import Register from "./components/Register";
import Login from "./components/Login";
import ClassCards from "./components/ClassCards";
import AttendanceEvaluation from "./components/AttendanceEvaluation";
import AttendanceTable from "./components/AttendanceTable";
import GoatFellowForm from "./components/GoatFellowForm";
import EvaluationTable from "./components/EvaluationTable";
import GramUpadhayManagement from "./components/GramUpadhayManagement";
import GramHunarManagement from "./components/GramHunarManagement";
import About from "./components/About";
import StudentData from "./components/StudentData";
import StudentOne from "./components/StudentOne";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<App />} />
      <Route path="register" key={"1"} element={<Register />} />
      <Route path="login" key={"2"} element={<Login />} />
      <Route path="classcards" key={"3"} element={<ClassCards />} />
      <Route path="goatfellowform" key={"3"} element={<GoatFellowForm />} />
      <Route path="ae" key={"4"} element={<AttendanceEvaluation />} />
      <Route path="attendancetable" key={"3"} element={<AttendanceTable />} />
      <Route path="evaluationtable" key={"3"} element={<EvaluationTable />} />
      <Route
        path="gramupadhaymanagement"
        key={"3"}
        element={<GramUpadhayManagement />}
      />
      <Route
        path="gramhunarmanagement"
        key={"3"}
        element={<GramHunarManagement />}
      />
      <Route path="about" key={"3"} element={<About />} />
      <Route path="studentdata" key={"3"} element={<StudentData />} />
      <Route path="/studentone" element={<StudentOne />} />
    </>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
