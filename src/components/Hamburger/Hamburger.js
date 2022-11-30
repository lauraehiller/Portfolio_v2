import React from 'react';
import { slide as Menu } from 'react-burger-menu'
import './Hamburger.scss';

/*https://github.com/negomi/react-burger-menu#styling*/

class Hamburger extends React.Component {
  render () {
    return (
      <Menu right width={ '60%' } burgerButtonClassName={ this.props.visible ? "bm-burger-button" : "invisible"}>
        <div className="bm-item-list">
          <div className="bm-item">
            <a id="about" href="#about-section">About</a>
          </div>
          <div className="bm-item">
            <a id="projects" href="#projects-section">Projects</a>
          </div>
          <div className="bm-item">
            <a id="experience" href="#experience-section">Experience</a>
          </div>
          <div className="bm-item">
            <a id="contact" href="#contact-section">Contact</a>
          </div>
        </div>
      </Menu>
    );
  }
}

export default Hamburger;