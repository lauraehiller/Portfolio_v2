import React from 'react';
import meImg from '../../images/Me.jpg';
import './About.scss';

function About() {
    return (
      <section id="about-section">
          <h2>About Me</h2>
          <div className="container">
            <div className="paragraph">
              <p>Hi, Laura here. I'm an early career Software Developer with a creative streak and an aptitude for writing 
                <span className="styled-text"> reusable and efficient code.  </span>  
              </p>
              <br/>
              <p>  
              The <span className="styled-text">intersection of art and engineering</span> is where I shine brightest. My goal on every 
                project is to balance aesthetics, functionality, and performance. The end result? Web 
                applications that are <span className="styled-text">visually stunning, user-friendly, and efficient.</span>
              </p>
              <br/>
              <p>Recently I have been working as a <span className="styled-text">Web Developer</span> for PV Magazine, and 
                volunteering as <span className="styled-text">Lead WebGL Dev Intern (Frontend)</span> for SpaceLab.
              </p>
              <br/>
              <p>Think I would be a good fit for a project?  Don't hesitate to reach out!  I'm always looking for 
                 opportunities to grow.
              </p>
              <br/>
              <button>Contact Me</button>
          </div>
          <div className="photo">
              <div className="flex-center">
                <img src={meImg} alt="Headshot of girl with long red-brown hair"/>
              </div>
          </div>
        </div>
      </section>
    )
  };
  
  export default About;