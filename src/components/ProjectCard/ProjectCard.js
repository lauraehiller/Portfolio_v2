import React from "react";
import "./ProjectCard.scss";

const ProjectCard = (projectObject) => {
  const { name, projectLink, imgUrl, imgAlt, description, tools, githubLink } =
    projectObject.project;
  const hasGitHub = githubLink ? true : false;
  const isVisible = projectObject.isVisible;

  return (
    <div className={`card ${isVisible ? "grow" : "shrink"}`}>
      <div className="card-header">
        <div className="card-title">
          <h4>{name}</h4>
          <div>
            <a href={projectLink}>
              <i className="fa-solid fa-arrow-up-right-from-square icon" />
            </a>
            <a href={hasGitHub ? githubLink : ""}>
              <i
                className={hasGitHub ? "fa-brands fa-github icon" : "hidden"}
              />
            </a>
          </div>
        </div>
        <img className="card-image" src={imgUrl} alt={imgAlt}></img>
      </div>
      <div className="card-body">
        <p>{description}</p>
      </div>
      <div className="card-footer">
        <p>{tools}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
