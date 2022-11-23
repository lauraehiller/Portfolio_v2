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
        </div>
    </section>
    )
  };
  
  export default Projects;