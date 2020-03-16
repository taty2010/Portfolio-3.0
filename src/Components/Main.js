import React, { useState } from "react";
import styled from "styled-components";
import About from "../About";
import { ReactComponent as Wave } from "../Wave.svg";
import { DefaultNav, FixedNav } from "../Components/sidebar/Nav";
import Form from "./Form";
import Projects from "../Projects/Projects";
import Carousel from "../Projects/Carousel";

const Main = () => {
  const [move, setMove] = useState(0);
  document.addEventListener("scroll", () => {
    setMove(window.scrollY);
  });

  // const Drip = styled(Wave)`
  //   /* top: ${move >= 500 ? "-120vh" : ""}; */
  //   /* @media only screen and (max-width: 899px) and (min-width: 600px) {
  //     top: ${move >= 100 ? "-120vh" : ""};
  //   }
  //   @media only screen and (min-width: 900px) and (max-width: 1199px) {
  //     width: 70%;
  //   }
  //   @media only screen and (min-width: 1200px) {
  //   } */
  // `;

  return (
    <div className="mainWrapper">
      <Wave
        styles={`top:${move >= 500 ? "-120vh" : ""}`}
        className={`wave ${move > 600 ? "fixed" : ""}`}
      />
      <div className="header">
        <div>
          <DefaultNav move={move} />
        </div>
        <div className="about-header">
          <h1>Hello,</h1>
          <h3>
            I am currently working as a Web Content Editor. Knowledgeable in
            Front-End Development and gaining experience in Back-End.
          </h3>
        </div>
      </div>
      {/* <Carousel /> */}
      <Projects />
    </div>
  );
};

export default Main;
