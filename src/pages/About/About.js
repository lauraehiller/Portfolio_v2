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
            Science an exceptional eye for Design!
          </p>
          <br />
          <p>
            The{" "}
            <span className="styled-text">
              intersection of art and engineering
            </span>{" "}
            is where I shine brightest. My primary objective on every project is
            to balance aesthetics, functionality, accessibility, and
            performance. The end result? Web applications that are
            <span className="styled-text">
              {" "}
              visually stunning, user-friendly, and efficient.
            </span>
          </p>
          <br />
          <p>
            My experience encompasses a wide variety of tools, ranging from
            <span className="styled-text"> Front-End</span> to{" "}
            <span className="styled-text"> Back-End </span>
            development. A few technologies I've been working with recently are{" "}
            <span className="styled-text">
              React.js, Next.js, TypeScript, GraphQL, Tailwind, and Sass.
            </span>
          </p>

          <br />
          <p>
            If you believe that I might be a good fit for a project or role,
            please do not hesitate to get in touch! I am always looking for new
            opportunities to learn and grow.
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
