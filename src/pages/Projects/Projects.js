import React from 'react';
import ProjectCard from '../../components/ProjectCard/ProjectCard.js';
import Featured from '../../components/Featured/Featured.js';
import {projectList} from './ProjectHelper.js';
import './Projects.scss';

function Projects() {
    return (
        <section id="projects-section">
        <h2>Projects</h2>
        <Featured />

        <div className="container">
          {projectList.map((project) => (
            <ProjectCard key = {project.name} project={project}/>
          ))}
            {/*<ProjectCard 
              name="Portfolio V2"
              imgUrl={firefliesImg}
              imgAlt="An image"
              description="The second iteration of my portfolio website.  
              Designed to be more accessible, more responsive, and more efficient."
              tools="HTML · CSS · JavaScript · React"
              projectLink="https://lauraehiller.com/"
              github={true}
              githubLink="https://github.com/lauraehiller"
            />
            <ProjectCard 
              name="Webstyle"
              imgUrl={firefliesImg}
              imgAlt="An image"
              description="A fun website for trying out different color and font combinations."
              tools="HTML · CSS · JavaScript"
              projectLink="https://lauraehiller.github.io/WebStyleProject/"
              github={true}
              githubLink="https://github.com/lauraehiller"
            />
            <ProjectCard 
              name="3D World: Fireflies"
              imgUrl={firefliesImg}
              imgAlt="An image"
              description="A beautiful 3D world I designed for Computer Graphics.  
              Fun Fact: There are about 12,000 fireflies in this world."
              tools="Three.js · WebGL · Blender · HTML · CSS"
              projectLink="https://people.ucsc.edu/~lhiller/index.html/Assignment%205/World.html"
              github={true}
              githubLink="https://github.com/lauraehiller"
            />
            <ProjectCard 
              name="3D World: Sunrise"
              imgUrl={sunriseImg}
              imgAlt="An image"
              description="A project for Computer Graphics in which
              I wrote custom shaders to create the lighting effects and to
              interpolate the sky color (creating the sunrise/sunset aesthetic)."
              tools="WebGL · HTML · CSS · JavaScript."
              projectLink="https://people.ucsc.edu/~lhiller/index.html/Assignment4/World.html"
              github={true}
              githubLink="https://github.com/lauraehiller"
            />
            <ProjectCard 
              name="Portfolio V1"
              imgUrl={websiteImg}
              imgAlt="An image"
              description="My first attempt at coding a portfolio website.  I've learned a lot since then!"
              tools="Bootstrap · HTML · CSS · Javascript"
              projectLink="https://lauraehiller.com/"
              github={true}
              githubLink="https://github.com/lauraehiller"
            />
            <ProjectCard 
              name="EmpoweredU"
              imgUrl={empoweredImg}
              imgAlt="An image"
              description="A user friendly and responsive website that I designed for the client."
              tools="WordPress · HTML"
              projectLink="https://myempoweredu.com/"
              github={false}
              githubLink="#"
    />*/}
        </div>
    </section>
    )
  };
  
  export default Projects;