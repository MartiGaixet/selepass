import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./App.css";

import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Home from "./pages/Home"
import Asignatura from "./pages/Asignatura";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element={<Signup/>} />
        <Route path="/" element={<Home/>} />
        <Route path="/Asignatura" element={<Asignatura/>} />
      </Routes>
    </Router>
  );
}

export default App;
