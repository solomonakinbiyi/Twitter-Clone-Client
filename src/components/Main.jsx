import React from "react";
import "./styles/main.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";

function Main() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
      <Routes>
        <Route path="/profile" element={"Idayat Olaide"}></Route>
      </Routes>
    </div>
  );
}

export default Main;
