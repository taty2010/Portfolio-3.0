import React from "react";
import styled from "styled-components";
import {ReactComponent as Blob} from './About.svg'

import Projects from "./Projects";

const About = () => {
  return (
    <div>
      <div className="about">
        <Blob className='blob'/>
        <p id='about'>
          Currently working as a Web Content Editor but I dream
          of making it big as a Front-End Developer with an eye
          for design.
        </p>
      </div>
      {/* <Projects /> */}
    </div>
  );
};

export default About;
