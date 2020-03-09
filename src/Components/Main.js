import React, { useState } from "react";
import styled from "styled-components";
import About from "../About";
import { ReactComponent as Wave } from "../Wave.svg";
import { DefaultNav, FixedNav } from "../Components/sidebar/Nav";
import Form from "./Form";
import Projects from "../Projects";

const Main = () => {
  const [move, setMove] = useState(0);
  document.addEventListener("scroll", () => {
    setMove(window.scrollY);
  });

  const Drip = styled(Wave)`
    top: ${move >= 450 ? "-120vh" : ""};
  `;

  return (
    <div className="mainWrapper">
      <Drip className={`wave ${move > 600 ? "fixed" : ""}`} />
      <div className="header">
        <div className="about-header">
          <h1>Hello,</h1>
          <h3>
            Currently working as a Web Content Editor. I am knowledgeable in
            Front-End Development and currently gaining experience in Back-End.
          </h3>
        </div>
        <div>
          <DefaultNav move={move} />
        </div>
      </div>
      <Projects />
    </div>
  );
};

export default Main;
