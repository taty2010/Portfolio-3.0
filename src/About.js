import React from "react";
import styled from "styled-components";

import Projects from "./Projects";

const About = () => {
  return (
    <div>
      <h2>Projects</h2>
      <div className="about">
        <h2>About Me </h2>
        <p>
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>
      <Projects />
    </div>
  );
};

export default About;
