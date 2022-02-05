import React, { useState } from "react";
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";
import styled from 'styled-components'


// export const background = {
//   blue: 'https://www.dropbox.com/s/nvm4oy3y07a7abw/wave-dark.png?raw=1',
//   purple: `${purpleDrip}`
// }

const SideBar = () => {

  const [toggle, setToggle] = useState(false);
  const [bkgChange, setBkgChange] = useState();
  // const [bgColor, setbgColor] = useState(background.purple)

  // const [move, setMove] = useState(0);
  // document.addEventListener("scroll", () => {
  //   setMove(window.scrollY);
  // });

  const SideBar = styled.div`
  opacity: 1;
  width: 25%;
`;

  return (
    <SideBar>
      <ul>
        <li>About</li>
        <li>Skills</li>
        <li>Projects</li>
        <li>Contact</li>
      </ul>
      <ul>
        <li>
          <a href='https://github.com/taty2010' target='_blank'>
          <i className="fab fa-github" />
          </a>
        </li>
        <li>
          <a href='https://www.linkedin.com/in/tatyana-novell-b0168bb1' target='_blank'>
          <i className="fab fa-linkedin" />
          </a>
        </li>
      </ul>
      <nav className='side-nav'>
      <ul>
        <a href="#about">
          <li>About</li>
        </a>
        <a href="#skills">
          <li>Skills</li>
        </a>
        <a href="#projects">
          <li>Projects</li>
        </a>
      </ul>
    </nav>
    </SideBar>
  );
};

export default SideBar;
