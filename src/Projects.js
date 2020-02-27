import React from "react";
import styled from "styled-components";
import { ReactComponent as Blob } from "./Components/blob.svg";
import { Blob2, Blob3 } from "./Components/blob2";
import { NavContact } from "./Components/sidebar/Nav";

const Projects = () => {
  const proj1 = "https://www.dropbox.com/s/6z2u3f1ddokcq6e/proj5Sq.png?raw=1";
  const proj2 = "https://www.dropbox.com/s/w3lp9l8sf7l1r4h/proj2Sq.png?raw=1";
  const proj3 = "";
  const proj4 = "";

  const Boxes = styled(Blob)`
    width: 300px;
    height: 300px;
    margin: 0.5%;
    text-align: center;
    /* clip-path: url("#myClippingPath"); */
    z-index: -2;
  `;

  // const Boxes2 = styled(Blob2)`
  //   width: 300px;
  //   height: 300px;
  //   margin: 0.5%;
  //   text-align: center;
  //   /* clip-path: url("#myClippingPath"); */
  //   z-index: -2;
  // `;

  return (
    <div className="projects">
      {/* <NavContact /> */}
      <h1>My Projects</h1>
      <div className="projectBoxes">
        <Boxes />
        <Blob2 proj1={proj1} className="boxes2" />
        <Boxes />
        <Blob3 img={proj2} className="boxes2" />
      </div>
    </div>
  );
};

export default Projects;
