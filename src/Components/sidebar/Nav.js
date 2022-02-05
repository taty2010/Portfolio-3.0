import React from "react";
// import styled from "styled-components";
import { Link } from "react-router-dom";

export const DefaultNav = props => {

  return (
    <nav className={`nav fixed`}>
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
        <Link to="/contact">
          <li>Contact</li>
        </Link>
      </ul>
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
    </nav>
  );
};

export const NavContact = () => {
  return (
    <nav className="nav ContactNav">
      <ul>
        <Link to="/">
          <li>Home</li>
        </Link>
        {/* <a href="#skills">
          <li>Skills</li>
        </a>
        <Link to="/projects">
          <li>Projects</li>
        </Link>
        <a href="#about">
          <li>About</li>
        </a>
        <Link to="/contact">
          <li>Contact</li>
        </Link> */}
      </ul>
    </nav>
  );
};
