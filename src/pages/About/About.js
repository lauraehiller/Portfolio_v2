import React from "react";
import meImg from "../../images/Me.jpg";
import "./About.scss";

const About = () => {
  return (
    <section id="about-section">
      <h2>About Me</h2>
      <div className="container">
        <div className="paragraph">
          <p>
            Hi, Laura here. I'm a{" "}
            <span className="styled-text">Software Developer</span> with a
            <span className="styled-text"> Bachelor's Degree</span> in Computer
            Science and an eye for Design.
          </p>
          <br />
          <p>
            The{" "}
            <span className="styled-text">
              intersection of art and engineering
            </span>{" "}
            is where I shine brightest. My goal on every project is to balance
            aesthetics, functionality, and performance. The end result? Web
            applications that are{" "}
            <span className="styled-text">
              visually stunning, user-friendly, and efficient.
            </span>
          </p>
          <br />
          <p>
            Recently I have been working as a{" "}
            <span className="styled-text">Full-Stack Software Developer</span>{" "}
            at Positon,
            <span className="styled-text"> Lead Frontend Developer </span>
            at SpaceLab, and as a{" "}
            <span className="styled-text">Web Developer</span> at PV Magazine.
          </p>
          <br />
          <p>
            Think I would be a good fit for a project or role? Don't hesitate to
            reach out! I'm always looking for opportunities to learn and grow.
          </p>
          <br />
          <a href="#contact-section">
            <button>Contact Me</button>
          </a>
        </div>
        <div className="photo">
          <div className="flex-center">
            <img src={meImg} alt="Headshot of girl with long red-brown hair" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
