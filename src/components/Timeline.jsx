import React from "react";
import "./styles/timeline.css";

function Timeline() {
  return (
    <div className="timeline">
      <div className="timeline--left">
        <img
          src="https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=867&q=80"
          alt=""
        />
      </div>
      <div className="timeline--right">
        <p className="profile--name">Johanson Brown</p>
        <p className="profile--description">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo, modi
          eius? Possimus eaque nulla eveniet temporibus reiciendis rerum iste,
          asperiores, ipsam placeat aspernatur numquam. Illo reprehenderit odit
          eveniet quibusdam at.
        </p>
        <img
          src="https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=867&q=80"
          alt=""
        />
        <div className="user--reactions">
          <span className="user--reaction--elem">
            <i className="bi bi-chat"></i>
            <span className="count">91</span>
          </span>
          <span className="user--reaction--elem">
            <i className="bi bi-repeat"></i>
            <span className="count">91</span>
          </span>
          <span className="user--reaction--elem">
            <i className="bi bi-heart"></i>
            <span className="count">91</span>
          </span>
          <span className="user--reaction--elem">
            <i className="bi bi-text-left"></i>
            <span className="count">91</span>
          </span>
          <span className="user--reaction--elem">
            <i className="bi bi-box-arrow-down"></i>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Timeline;
