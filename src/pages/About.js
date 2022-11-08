import React from 'react';
import meImg from '../images/Me.jpg';
import './About.scss';

function About() {
    return (
      <section className="about-section">
          <h2>About Me</h2>
          <div className="container">
            <div className="item1">
              <p>Hi, I'm Laura.  I'm an aspiring Software Devleoper with a creative streak 
                and a passion for writing <span className="styled-text">reusable and efficient code.</span>  
                I recently graduated from the University of California, Santa Cruz with a BS in Computer Science.
                </p>
                <br/>
                <p>  
                I enjoy working at the intersection of <span className="styled-text">art and engineering</span>, designing accessible 
                  web applications that are visually stunning and easy to use!  
                </p>
                <br/>
                <p>Recently I've been working as a Web Developer for <span className="styled-text">PV Magazine</span>, 
                and as a Frontend Engineer for <span className="styled-text">SpaceLab.</span></p>
                <br/>
          </div>
          <div className="item2">
              <div className="flex-center">
                <img src={meImg} alt="Headshot of girl with long red-brown hair"/>
              </div>
          </div>
        </div>
      </section>
    )
  };
  
  export default About;