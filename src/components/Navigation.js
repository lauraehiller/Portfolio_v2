//import React, { useState } from 'react';
import './Navigation.scss';
import Hamburger from './Hamburger.js';
import logo from '../images/Website_Logo.png';

function Navigation() {
  return (
    <>
      <div className="hamburger-wrap">
        <Hamburger />
      </div>
      <nav className="nav-wrap">
        <div className="logo-container">
          <img src={logo} alt="White dragon logo"/>
        </div>
        <ul className="nav-links">
          <li><a href="/about">About</a></li>
          <li><a href="/projects">Projects</a></li>
          <li><a href="/Experience">Experience</a></li>
          <li><a href="/Contact">Contact</a></li>
        </ul>
      </nav>
    </>
  )
};

export default Navigation;