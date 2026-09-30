import Hero from "../../components/Hero/Hero.js";
import Experience from "../Experience/Experience.js";
import ProjectSection from "../Projects/Projects.js";
import meImg from "../../images/Me-min-2024.jpg";
import "./Home.scss";
import "./Contact.scss";

const About = () => {
  return (
    <section id="about-section">
      <h2>About Me</h2>
      <div className="container">
        <div className="paragraph">
          <p>Hey, I'm Laura.</p>
          <br />
          <p>
            {" "}
            As a Full-Stack developer, the{" "}
            <span className="styled-text">
              intersection of art and engineering
            </span>{" "}
            is where I shine brightest. My primary objective on every project is
            to balance{" "}
            <span className="styled-text">
              functionality, accessibility, performance, and style.
            </span>
          </p>
          <br />
          <p>
            Recently I have enjoyed exploring projects that diver deeper into
            <span className="styled-text"> Back-End Development.</span> A few
            technologies I've been working with are{" "}
            <span className="styled-text">React.js, Next.js, and Python.</span>
          </p>
          <br />
          <p>
            When I'm not coding, I spend my time pursuing various
            <span className="styled-text"> outdoor adventures</span>. At the top
            of my <em>long</em> list of hobbies are hiking, climbing,
            backpacking, and skiing. Oh yeah, I'm also a huge{" "}
            <span className="styled-text">Sci-Fi and Fantasy </span>
            nerd.
          </p>
          <br />
          <a href="#contact-section">
            <button>Contact Me</button>
          </a>
        </div>
        <div className="photo">
          <div className="flex-center">
            <img src={meImg} alt="Headshot of girl with long hair" />
          </div>
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact-section">
      <h2>Contact</h2>
      <div className="container">
        <div className="social-media">
          <h5>Find Me Online</h5>
          <p>Send a message and say hi👋</p>
          <div className="social-links-container">
            <a href="https://www.linkedin.com/in/laura-e-hiller/">
              <i className="fa-brands fa-linkedin-in icon" />
            </a>
            <a href="https://github.com/lauraehiller">
              <i className="fa-brands fa-github icon" />
            </a>
            <a href="https://codepen.io/eofnums">
              <i className="fa-brands fa-codepen icon" />
            </a>
          </div>
        </div>
        <div className="email">
          <h5>Or Send Me An Email</h5>
          <button>
            <a
              className="contact-form"
              href="mailto:Hillerelaura@gmail.com"
              subject="Personal Site Contact form entry"
            >
              Contact Me
            </a>
          </button>
        </div>
      </div>
    </section>
  );
};

const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <ProjectSection />
      <Experience />
      <Contact />
    </div>
  );
};

export default Home;

// <Projects />
// <ExperienceSection />
// <Contact />
