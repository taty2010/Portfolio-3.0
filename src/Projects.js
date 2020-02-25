import React from "react";
import styled from "styled-components";
import { ReactComponent as Blob } from "./Components/blob.svg";
import { ReactComponent as Blob2 } from "./Components/blob2.svg";
import {NavContact} from './Components/sidebar/Nav'

const Projects = () => {
  const Boxes = styled(Blob)`
    width: 300px;
    height: 300px;
    margin: 0.5%;
    text-align: center;
    clip-path: url("#myClippingPath");
    z-index: -2;
  `;

  const Boxes2 = styled(Blob2)`
    width: 300px;
    height: 300px;
    margin: 0.5%;
    text-align: center;
    clip-path: url("#myClippingPath");
    z-index: -2;
  `;

  return (
    <div className="projects">
      <NavContact/>
      <h1>My Projects</h1>
      <div className="projectBoxes">
        <Boxes />
        <Boxes2 />
        <Boxes />
        <Boxes2 />
      </div>
    </div>
  );
};

export default Projects;
