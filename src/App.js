import React from "react";
import "./styles.scss";
import SideBar from "./Components/sidebar/SideBar";
import Main from "./Components/Main";
import { Route } from "react-router-dom";
import Home from "./Components/Main";
import Contact from "./Components/Form";

import styled from "styled-components";

export default function App() {
  return (
    <div className="App">
      <SideBar />
      <Main />
      {/* <About /> */}
      <Route exact path="/" component={Home} />
      <Route exact path="/contact" component={Contact} />
    </div>
  );
}
