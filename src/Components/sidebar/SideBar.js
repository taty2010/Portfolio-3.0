import React from "react";
import styled from "styled-components";

const SideBar = () => {
  return (
    <div className="sidebar">
      <div className="profileImg" />
      <h3>First Last</h3>
      <h3>Front-End Developer</h3>
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
