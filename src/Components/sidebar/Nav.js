import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

export const DefaultNav = props => {
  const Nav = styled.div`
    top: ${props.move >= 450 ? "40vh" : ""};
  `;

  return (
    <Nav className={`nav ${props.move >= 600 ? "fixed" : ""}`}>
      <ul>
        <Link to="/">
          <li>Home</li>
        </Link>
        <a href="#projects">
          <li>Projects</li>
        </a>
        <a href="#about">
          <li>About</li>
        </a>
        <Link to="/contact">
          <li>Contact</li>
        </Link>
      </ul>
    </Nav>
  );
};

export const NavContact = () => {
  return (
    <nav className="nav ContactNav">
      <ul>
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/projects">
          <li>Projects</li>
        </Link>
        <a href="#about">
          <li>About</li>
        </a>
        <Link to="/contact">
          <li>Contact</li>
        </Link>
      </ul>
    </nav>
  );
};
