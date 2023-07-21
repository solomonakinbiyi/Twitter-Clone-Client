import React from "react";
import "./styles/profile.css";
import Timeline from "./Timeline";

function Profile() {
  return (
    <div className="profile">
      <div className="prf--header">
        <p className="prf--header--name">Daniel Cranney</p>
        <p className="tweet--number">27.8k Tweets</p>
      </div>
      <div
        className="prf--banner"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1661956602868-6ae368943878?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80)",
        }}
      >
        <img
          src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
          alt=""
        />
      </div>
      <div className="prf--flw--button--wrp">
        <button className="prf--flw--button">Follow</button>
      </div>
      <p className="prf--name">Daniel Cranney</p>
      <p className="prf--username">@danielcranney</p>
      <p className="bio">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit unde corporis est autem, ut dicta possimus deserunt alias? Quo
      </p>
      <div className="prf--stats">
        <span className="flw--stats--numbers">
          1,927 <span>following</span>
        </span>
        <span className="flw--stats--numbers">
          1,927 <span>followers</span>
        </span>
      </div>
      <div className="prf--category">
        <p>Tweets</p>
        <p>Replies</p>
        <p>Media</p>
        <p>Likes</p>
      </div>
      <Timeline/>
      <Timeline/>
    </div>
  );
}

export default Profile;
