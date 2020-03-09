import React from "react";

const SideBar = () => {
  return (
    <div className="sidebar">
      <div className="profileImg" />
      <h3>Tatyana Novell</h3>
      <h3>Front-End Developer</h3>
      <i className="fas fa-map-marker-alt"> Texas</i>
      <ul>
        <li>
          <i className="fab fa-github" />
        </li>
        <li>
          <i className="fab fa-linkedin" />
        </li>
        <li>
          <i className="fab fa-twitter-square" />
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
