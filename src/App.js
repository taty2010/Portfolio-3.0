import React from "react";
import "./styles.scss";
import { Route } from "react-router-dom";
import Home from "./Components/Main";
import Contact from "./Components/Form";
import Projects from "./Projects/Projects";

export default function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Home} />
      <Route exact path="/contact" component={Contact} />
      <Route exact path="/projects" component={Projects} />
    </div>
  );
}
