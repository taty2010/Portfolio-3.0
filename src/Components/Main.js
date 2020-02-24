import React, { useState } from "react";
import styled from "styled-components";
import About from "../About";
import { ReactComponent as Wave } from "../Wave.svg";
import { DefaultNav, FixedNav } from "../Components/sidebar/Nav";
import Form from "./Form";

const Main = () => {
  const [move, setMove] = useState(0);
  document.addEventListener("scroll", () => {
    setMove(window.scrollY);
  });

  const Drip = styled(Wave)`
    top: ${move >= 450 ? "30vh" : ""};
  `;

  return (
    <div className="mainWrapper">
      <Drip className={`wave ${move > 600 ? "fixed" : ""}`} />
      <div className="header">
        <div>
          <DefaultNav move={move} />
          {/* <Wave className="wave2" /> */}
        </div>
      </div>
      {/* <About /> */}
      {/* <Form /> */}
    </div>
  );
};

export default Main;
