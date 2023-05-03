import React, { useState, useEffect } from "react";
import ProjectCard from "../../components/ProjectCard/ProjectCard.js";
import Featured from "../../components/Featured/Featured.js";
import { projectList, featuredList } from "./ProjectHelper.js";
import "./Projects.scss";

const Projects = () => {
  const [isVisible, setVisibility] = useState(false);
  const [buttonText, setbuttonText] = useState("View Project Archive");

  const showProjects = () => {
    setVisibility(!isVisible);
  };

  useEffect(() => {
    isVisible
      ? setbuttonText("Hide Project Archive")
      : setbuttonText("View Project Archive");
  }, [isVisible]);

  return (
    <section id="projects-section">
      <h2>Projects</h2>
      {featuredList.map((featured, index) => (
        <Featured key={index} featured={featured} index={index} />
      ))}
      <div className="button-wrap">
        <button onClick={showProjects}>{buttonText}</button>
      </div>
      <div
        className={`container ${
          isVisible ? "container-grow" : "container-shrink"
        }`}
      >
        {projectList.map((project) => (
          <ProjectCard
            key={project.name}
            project={project}
            isVisible={isVisible}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
