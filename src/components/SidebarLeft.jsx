import React from "react";
import "./styles/sidebarleft.css";

function SidebarLeft() {
  return (
    <div className="sidebarleft">
      <div className="nav--item mb-hide">
        <i className="bi bi-twitter" style={{marginRight: '0'}}></i>
        <span></span>
      </div>
      <div className="nav--item">
        <i className="bi bi-house-door-fill"></i>
        <span>Home</span>
      </div>
      <div className="nav--item">
        <i className="bi bi-search"></i>
        <span>Explore</span>
      </div>
      <div className="nav--item">
        <i className="bi bi-bell"></i>
        <span>Notifications</span>
      </div>
      <div className="nav--item">
        <i className="bi bi-envelope"></i>
        <span>Messages</span>
      </div>
      <div className="nav--item mb-hide">
        <i className="bi bi-card-list"></i>
        <span>Lists</span>
      </div>
      <div className="nav--item mb-hide">
        <i className="bi bi-bookmark"></i>
        <span>Bookmarks</span>
      </div>
      <div className="nav--item mb-hide">
        <i className="bi bi-people-fill"></i>
        <span>Communities</span>
      </div>
      <div className="nav--item mb-hide">
        <i className="bi bi-patch-check"></i>
        <span>Verified</span>
      </div>
      <div className="nav--item">
        <i className="bi bi-person"></i>
        <span>Profile</span>
      </div>
      <div className="nav--item more--wrap mb-hide">
        <div className="more--custom--icon">
          <i className="bi bi-three-dots"></i>
        </div>
        <span>More</span>
      </div>
    </div>
  );
}

export default SidebarLeft;
