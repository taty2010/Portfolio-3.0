import React, { useState } from "react";
import styled from "styled-components";
import { ReactComponent as Wave } from "../../Wave.svg";
import { Route, Link } from "react-router-dom";

export const DefaultNav = props => {
  const Nav = styled.div`
    top: ${props.move >= 450 ? "60vh" : ""};
  `;

  return (
    <Nav className={`nav ${props.move >= 600 ? "fixed" : ""}`}>
      <ul>
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to='/projects'>
          <li>Projects</li>
        </Link>
        <Link>
          <li>About</li>
        </Link>
        <Link to="/contact">
          <li>Contact</li>
        </Link>
        {/* <Wave className="wave2" /> */}
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
        <Link to='/projects'>
          <li>Projects</li>
        </Link>
        <Link to='#about'>
          <li>About</li>
        </Link>
        <Link to="/contact">
          <li>Contact</li>
        </Link>
        {/* <Wave className="wave2" /> */}
      </ul>
    </nav>
  );
};
