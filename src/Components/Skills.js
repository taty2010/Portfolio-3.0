import React, { useState } from "react";
// import { Css, Html, Js, Less } from "./blob2";
import css from "../img/css.png";
import JS from "../img/JS.png";
import html from "../img/html.png";
import LESS from "../img/LESS.png";
import Ps from "../img/Ps.png";
import ReactJs from "../img/React.png";
import styled from "styled-components";

const Skills = () => {
  const [move, setMove] = useState(0);
  document.addEventListener("scroll", () => {
    setMove(window.scrollY);
  });
  console.log(move);
  const mobile = move > 100 ? "1" : "0";
  const mobileMid = move > 200 ? "1" : "0";
  const mobileBttm = move > 300 ? "1" : "0";
  const scrollingTop = move > 600 ? "1" : "0";
  const scrollingMid = move > 700 ? "1" : "0";
  const scrollingBttm = move > 800 ? "1" : "0";

  const Img = styled.img`
    opacity: ${scrollingTop};
    @media only screen and (max-width: 599px) {
      opacity: ${mobile};
    }
  `;

  const ImgMid = styled.img`
    opacity: ${scrollingMid};
    @media only screen and (max-width: 599px) {
      opacity: ${mobileMid};
    }
  `;

  const ImgBttm = styled.img`
    opacity: ${scrollingBttm};
    @media only screen and (max-width: 599px) {
      opacity: ${mobileBttm};
    }
  `;

  return (
    <div id="skills" className="skills">
      <div className="skills_header">
        <h2>Skills</h2>
      </div>
      <Img className="skills_blob css" src={css} alt="css" />
      <Img className="skills_blob html" src={html} alt="html" />
      <ImgMid className="skills_blob js" src={JS} alt="javascript" />
      <ImgMid className="skills_blob less" src={LESS} alt="Less" />
      <ImgBttm className="skills_blob ps" src={Ps} alt="Photoshop" />
      <ImgBttm className="skills_blob react" src={ReactJs} alt="React JS" />
    </div>
  );
};

export default Skills;
