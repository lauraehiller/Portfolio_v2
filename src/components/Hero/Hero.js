import React from "react";
import "./Hero.scss";
import Scene from "../Scene/Scene.js";

const Hero = () => {
  return (
    <div id="hero">
      <div className="container">
        <h1>Laura&nbsp;Hiller</h1>
        <p>Software&nbsp;Developer · Full-Stack · Front-End · Web</p>
      </div>
      <Scene />
    </div>
  );
};

export default Hero;
