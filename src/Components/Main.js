import React, { useState } from "react";
import { ReactComponent as Wave } from "../Wave.svg";
import { DefaultNav} from "../Components/sidebar/Nav";
import Projects from "../Projects/Projects";
import Skills from "./Skills";
import computer from '../img/drip-computer.png'
import BackdropFilter from "react-backdrop-filter";
import {ReactComponent as CutOut} from '../cutOut.svg';

const Main = () => {
  const [move, setMove] = useState(0);
  document.addEventListener("scroll", () => {
    setMove(window.scrollY);
  });

  const toTop = move > 600 ? "1" : "0";

  const backToTop = () => {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  };

  return (
    <div className="mainWrapper">
      {/* <Wave
        styles={`top:${move >= 500 ? "-120vh" : ""}`}
        className={`wave ${move > 600 ? "fixed" : ""}`}
      /> */}
      <div className="banner">
        <div className="cutOut"/>
      </div>
      <div className="navWrapper">
          <DefaultNav move={move} />
      </div>
      <div className="header">
        <div className="about-header">
        <div className="headerImg" />
          <div className="info">
            <h1>Tatyana Novell</h1>
            <h2>Front-End Developer</h2>
          </div>
        </div>
      </div>
        <h3 id='about' className="aboutText">
          <span className='about-title'>About Me</span><br/>
          <div className='border'><div></div></div>
          <p>
            My name is Tatyana, I am currently working as a Technical Support Engineer
            and working towards becoming a Front End Developer.
          </p>
        </h3>
      <Skills />
      <Projects />
      <div style={{ opacity: toTop }} className="toTop">
        <i onClick={backToTop} className="fas fa-chevron-circle-up" />
      </div>
    </div>
  );
};

export default Main;
