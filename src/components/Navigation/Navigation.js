//import React, { useState } from 'react';
import './Navigation.scss';
import Hamburger from '../Hamburger/Hamburger.js';
import logo from '../../images/Website_Logo.png';
import React, { useState, useEffect } from 'react';

const Navigation = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [top, setTop] = useState(true);

  useEffect (() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setTop(currentScrollPos < 10);
      setVisible((prevScrollPos > currentScrollPos) || top);
      setPrevScrollPos(currentScrollPos);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos, visible, top]);

  return (
    <>
      <div className="hamburger-wrap" style={{top: visible ? '0' : '-100px'}}>
        <Hamburger visible={visible}/>
      </div>
      <nav className="nav-wrap" style={{
          top: visible ? '0' : '-100px', 
          background: top ? 'transparent' : 'rgba(26, 0, 68, 0.4)',
          boxShadow: top ? 'none' : '0 -15px 50px black'
          }}>
        <div className="logo-container">
          <a href="#hero"><img src={logo} alt="White dragon logo"/></a>
        </div>
        <ul className="nav-links">
          <li><a href="#about-section">About</a></li>
          <li><a href="#projects-section">Projects</a></li>
          <li><a href="#experience-section">Experience</a></li>
          <li><a href="#contact-section">Contact</a></li>
        </ul>
        <a href="#hero"><i className="fa-regular fa-hand-point-up"></i></a>
      </nav>
    </>
  )
}

export default Navigation;