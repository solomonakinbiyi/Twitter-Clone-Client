import React from "react";
import "./styles/sidebarright.css";

function SidebarRight() {
  return (
    <div className="sidebarright">
      <div className="sidebarright--search">
        <i className="bi bi-search"></i>
        <input type="text" placeholder="Search" />
      </div>
      <div className="get--verified">
        <p>Get Verified</p>
        <p>Subscribe to unlock new features</p>
        <button>Get Verified</button>
      </div>
      <div className="who--to--follow">
        <p style={{ fontWeight: "bolder", fontSize: "1.2rem" }}>
          Who to follow
        </p>
        <div className="wtf--profile">
          <div className="wtf--wrap">
            <img
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
              alt=""
            />
            <div className="wtf--profile--mid">
              <p className="wtf--name">David Park</p>
              <p className="wtf--username">@Davidpark226</p>
            </div>
          </div>

          <button>Follow</button>
        </div>
      </div>





      <div className="following">
        <p style={{ fontWeight: "bolder", fontSize: "1.2rem" }}>
          Following
        </p>
        <div className="flw--profile">
          <div className="flw--wrap">
            <img
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
              alt=""
            />
            <div className="flw--profile--mid">
              <p className="flw--name">David Park</p>
              <p className="flw--username">@Davidpark226</p>
            </div>
          </div>

          <button>Unfollow</button>
        </div>
      </div>
    </div>
  );
}

export default SidebarRight;
