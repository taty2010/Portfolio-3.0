import React, { useState } from "react";
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";

const SideBar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div className={`sidebar ${!toggle ? "closed" : ""}`}>
      <AwesomeButton
      size='icon'
        type="primary"
        className="sidebar_bttn"
        onPress={e => setToggle(!toggle)}
      >
        <p>
          {!toggle ? (
            <i className="fas fa-angle-double-right" />
          ) : (
            <i className="fas fa-angle-double-left" />
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
          <a href='https://github.com/taty2010' target='_blank'>
          <i className="fab fa-github" />
          </a>
        </li>
        <li>
          <a href='https://www.linkedin.com/in/tatyana-novell-b0168bb1' target='_blank'>
          <i className="fab fa-linkedin" />
          </a>
        </li>
      </ul>
      <nav className='side-nav'>
      <ul>
        <a href="#about">
          <li>About</li>
        </a>
        <a href="#skills">
          <li>Skills</li>
        </a>
        <a href="#projects">
          <li>Projects</li>
        </a>
        {/* <Link to="/contact">
          <li>Contact</li>
        </Link> */}
      </ul>
    </nav>
    </div>
  );
};

export default SideBar;
