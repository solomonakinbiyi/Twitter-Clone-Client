import React from "react";
import Timeline from "./Timeline";

function Home() {
  return (
    <div>
      {" "}
      <div className="topbar--post--category">
        <div className="topbar--post--category--one">
          <p>Home</p>
        </div>
        <div className="topbar--post--category--two">
          <div className="category--two--left">
            <span>For you</span>
          </div>
          <div className="category--two--right">
            <span>Following</span>
          </div>
        </div>
      </div>
      <div className="whats--happening">
        <div className="whats--happening--left">
          <img
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
            alt=""
          />
        </div>
        <div className="whats--happening--right">
          <div className="whats--happening--right--top">
            <input type="text" placeholder="What is hapening?!" />
            <br />
            <br />
            <hr style={{ width: "100%", borderColor: "rgb(47, 51, 54)" }} />
          </div>
          <div className="whats--happening--right--bottom">
            <div className="whrb--one">
              <i className="bi bi-image"></i>
              <i className="bi bi-filetype-gif"></i>
              <i className="bi bi-list-task"></i>
              <i className="bi bi-emoji-smile"></i>
              <i className="bi bi-calendar"></i>
              <i className="bi bi-geo-alt"></i>
            </div>
            <div className="whrb--two">
              <button>Tweet</button>
            </div>
          </div>
        </div>
      </div>
      <div className="timeline--wrap">
        <Timeline />
        <Timeline />
        <Timeline />
        <Timeline />
        <Timeline />
        <Timeline />
        <Timeline />
      </div>
    </div>
  );
}

export default Home;
