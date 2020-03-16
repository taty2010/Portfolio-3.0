import React, { useState } from "react";
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";

const SideBar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div className={`sidebar ${!toggle ? "closed" : ""}`}>
      <AwesomeButton
        type="primary"
        className="sidebar_bttn"
        onPress={e => setToggle(!toggle)}
      >
        <p>
          {!toggle ? (
            <i class="fas fa-angle-double-right" />
          ) : (
            <i class="fas fa-angle-double-left" />
          )}
        </p>
      </AwesomeButton>
      <div className="profileImg" />
      <h3>Tatyana Novell</h3>
      <h3>Front-End Developer</h3>
      <span className="location">
        <i className="fas fa-map-marker-alt"> Texas</i>
      </span>
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
