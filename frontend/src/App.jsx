import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Outlet, useLocation } from "react-router-dom";
import Home from "./components/Home"

function App() {
  let location = useLocation();

  return (
    <>
      <Navbar />
      {location === '/login'? "" : <Home/>}
      <Outlet/>
      <Footer />
    </>
  );
}

export default App;
