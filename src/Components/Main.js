import React, { useState } from "react";
import { DefaultNav} from "../Components/sidebar/Nav";
import Projects from "../Projects/Projects";
import Skills from "./Skills";
import plus from '../img/plus.png';
import illustration from '../img/face_illustration.png'
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
      <div className="navWrapper">
          <DefaultNav move={move} />
      </div>
      <div className="banner">
        <figure className="portrait">
              <img src={illustration} alt="portrait illustration"></img>
        </figure>
        <div className="cutOut">
        </div>
      </div>
      <div className="header">
      </div>
        <h3 id='about' className="aboutText">
          <span className='about-title'>Hello,</span><br/>
          <div className='border'><div></div></div>
          <p>
            My name is Tatyana, I am a Front End Developer currently working as a Technical Support Engineer. I primarily
            use Javascript and Angular on the job but I have a background in React. I enjoy tinkering around in CSS and in my free time 
            I enjoy painting and drawing.
          </p>
        </h3>
      <div className="main-content">
        <Skills />
        <Projects plus={plus}/>
        <div style={{ opacity: toTop }} className="toTop">
          <i onClick={backToTop} className="fas fa-chevron-circle-up" />
        </div>
      </div>
    </div>
  );
};

export default Main;
