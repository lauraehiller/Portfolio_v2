import React from 'react';
import './Hero.scss';
import Scene from '../Scene/Scene.js';

function Hero() {
    return (
        <div className="hero">
            <div className="container">
                <h1>Laura Hiller</h1>
                <p>Software Engineer · Web Developer</p>
            </div>
            <Scene />
        </div>
    )
};
  
export default Hero;