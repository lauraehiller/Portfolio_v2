import React, {useState} from 'react';
import './Hamburger.scss';

const Hamburger = (visible) => {
  const [open, setOpen] = useState(false);
  const show = visible.visible;
    return (
      <>
        <div className="burger-icon" onClick={() => setOpen(!open)} style={{top: show ? '20px' : '-100px'}}>
          <div className="burger-line"/>
          <div className="burger-line"/>
          <div className="burger-line"/>
          <div className="burger-line"/>
        </div>

        <div className="bm-menu-wrap" style={open ? {transform: 'translateX(0%)'} : {transform: 'translateX(100%)'}}>
          <div className="bm-cross-button" onClick={() => setOpen(!open)}>
            <i className="fa-solid fa-xmark"></i>
          </div>
          <div className="bm-menu" style={open ? {transform: 'translateX(0%)'} : {transform: 'translateX(100%)'}}>
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
          </div>
        </div>
      </>
    )
}

/*class Hamburger extends React.Component {
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
}*/

export default Hamburger;