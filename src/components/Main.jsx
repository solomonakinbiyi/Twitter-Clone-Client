import React from "react";
import "./styles/main.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Profile from "./Profile";

function Main() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
      <Routes>
        <Route path="/profile" element={<Profile/>}></Route>
      </Routes>
    </div>
  );
}

export default Main;
