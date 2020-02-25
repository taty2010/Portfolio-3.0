import React from "react";
import styled from "styled-components";

import Projects from "./Projects";

const About = () => {
  return (
    <div id='about'>
      <div className="about">
        <h2>About Me </h2>
        <p>
        My name is Tatyana, I am currently working as a Web Content Editor
         while also attending Lambda School to become a Software Engineer.
         Checkout what I've learned so far and take a peak at all the projects 
         I've completed.
        </p>
      </div>
      {/* <Projects /> */}
    </div>
  );
};

export default About;
