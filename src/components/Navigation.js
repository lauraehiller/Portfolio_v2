//import React, { useState } from 'react';
import './Navigation.scss';
import Hamburger from './Hamburger.js';
import logo from '../images/Website_Logo.png';
import React, { useState, useEffect } from 'react';

const Navigation = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [atTop, setStyle] = useState(true);

  useEffect (() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setVisible((prevScrollPos > currentScrollPos) || currentScrollPos < 10);
      setStyle(currentScrollPos < 10);
  
      setPrevScrollPos(currentScrollPos);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos, visible]);

  return (
    <>
      <div className="hamburger-wrap" style={{top: visible ? '0' : '-100px'}}>
        <Hamburger visible={visible}/>
      </div>
      <nav className="nav-wrap" style={{
          top: visible ? '0' : '-100px', 
          background: atTop ? 'transparent' : 'rgba(26, 0, 68, 0.4)',
          boxShadow: atTop ? 'none' : '0 -15px 50px black'
          }}>
        <div className="logo-container">
          <img src={logo} alt="White dragon logo"/>
        </div>
        <ul className="nav-links">
          <li><a href="/about">About</a></li>
          <li><a href="/projects">Projects</a></li>
          <li><a href="/Experience">Experience</a></li>
          <li><a href="/Contact">Contact</a></li>
        </ul>
        <a href="/Home"><i className="fa-regular fa-hand-point-up"></i></a>
      </nav>
    </>
  )
}

export default Navigation;