import React from 'react';
import { slide as Menu } from 'react-burger-menu'
import './Hamburger.scss';

/*https://github.com/negomi/react-burger-menu#styling*/

class Hamburger extends React.Component {

  render () { //width={ '20%' }
    return (
      <Menu right burgerButtonClassName={ this.props.visible ? "bm-burger-button" : "invisible"}>
        <div className="bm-item-list">
          <div className="bm-item">
            <a id="about" href="/about">About</a>
          </div>
          <div className="bm-item">
            <a id="projects" href="/projects">Projects</a>
          </div>
          <div className="bm-item">
            <a id="experience" href="/experience">Experience</a>
          </div>
          <div className="bm-item">
            <a id="contact" href="/contact">Contact</a>
          </div>
        </div>
      </Menu>
    );
  }
}

export default Hamburger;