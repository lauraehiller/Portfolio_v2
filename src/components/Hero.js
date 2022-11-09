import React from 'react';
import './Hero.scss';
import logo from '../images/Website_Logo.png';

function Hero() {
    return (
        <div className="hero">
            <div className="container">
                <h1>Laura Hiller</h1>
                <p>Software Engineer · Web Developer</p>
                {/*<div className="image-wrap">
                    <img src={logo} alt="White dragon logo"/>
                </div>*/}
            </div>
        </div>
    )
};
  
export default Hero;