import React from "react";
import styled from "styled-components";
import { Blob1 } from "./Components/blob";
import { Blob2, Blob3 } from "./Components/blob2";
import {NavContact} from './Components/sidebar/Nav'
import {proj1} from './img/proj1ImgSq.png'

const Projects = () => {
  const proj1 = "https://www.dropbox.com/s/6z2u3f1ddokcq6e/proj5Sq.png?raw=1";
  const proj2 = "https://www.dropbox.com/s/w3lp9l8sf7l1r4h/proj2Sq.png?raw=1";
  const proj3 = "https://www.dropbox.com/s/agkcr4wings3y2q/proj4Sq.png?raw=1";
  const proj4 = "";

  return (
    <div className="projects">
      {/* <NavContact /> */}
      <h1>My Projects</h1>
      <div className="projectBoxes">
        <Blob1 img={proj3} className="boxes2" />
        <Blob2 proj1={proj1} className="boxes2" />
        <Blob3 img={proj2} className="boxes2" />
      </div>
    </div>
  );
};

export default Projects;
