import React from 'react';
import ProjectCard from '../components/ProjectCard.js';

import spacelabImg from '../images/SpaceLab.png';
import firefliesImg from '../images/Fireflies.jpg';
import empoweredImg from '../images/EmpoweredU.jpg';
import sunriseImg from '../images/Sunrise.jpg';
import websiteImg from '../images/MyWebsite.png';

import './Projects.scss';

function Projects() {
    return (
        <section className="project-section">
        <h2>Projects</h2>
          <div className="container">
            <ProjectCard 
              name="SpaceMap"
              imgUrl={spacelabImg}
              imgAlt="An image"
              description="A 3D map of the stars plotted with NASA data from the Keplar Mission."
              tools="HTML · CSS · JavaScript · Three.js"
              projectLink="#"
              github={true}
            />
            <ProjectCard 
              name="Portfolio: V2.0"
              imgUrl={firefliesImg}
              imgAlt="An image"
              description="The second iteration of my portfolio website.  
              Designed to be more accessible, more responsive, and more efficient."
              tools="HTML · CSS · JavaScript · React"
              projectLink="#"
              github={true}
            />
            <ProjectCard 
              name="3D World: Fireflies"
              imgUrl={firefliesImg}
              imgAlt="An image"
              description="A beautiful 3D world I designed for Computer Graphics.  
              Fun Fact: There are about 12,000 fireflies in this world."
              tools="Three.js · WebGL · Blender · HTML · CSS"
              projectLink="#"
              github={true}
            />
            <ProjectCard 
              name="EmpoweredU Website"
              imgUrl={empoweredImg}
              imgAlt="An image"
              description="A user friendly and responsive website that I designed for the client."
              tools="WordPress · HTML"
              projectLink="#"
              github={true}
            />
            <ProjectCard 
              name="3D World: Sunrise"
              imgUrl={sunriseImg}
              imgAlt="An image"
              description="A project for Computer Graphics in which
              I wrote custom shaders to create the lighting effects and to
              interpolate the sky color (creating the sunrise/sunset aesthetic)."
              tools="WebGL · HTML · CSS · JavaScript."
              projectLink="#"
              github={true}
            />
            <ProjectCard 
              name="Portfolio: V1.0"
              imgUrl={websiteImg}
              imgAlt="An image"
              description="My first attempt at coding a portfolio website.  I think my skills have come a long way since then."
              tools="Bootstrap · HTML · CSS · Javascript"
              projectLink="#"
              github={true}
            />
        </div>
    </section>
    )
  };
  
  export default Projects;