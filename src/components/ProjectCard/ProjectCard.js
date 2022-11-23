import React from 'react';
import './ProjectCard.scss';

const ProjectCard = (projectObject)  => {
    const project = projectObject.project;
    let name = project.name;
    let projectLink = project.projectLink;
    let imgUrl = project.imgUrl;
    let imgAlt = project.imgAlt;
    let description = project.description;
    let tools = project.tools;
    let hasGitHub = false;
    if (project.gitHub) {
		hasGitHub = true;
	}

    return (
        <div className="card">
            <div className="card-header">  
            <div className="card-title">
                <h4>{name}</h4>
                <div>
                    <a href={projectLink}><i className="fa-solid fa-arrow-up-right-from-square icon"/></a>
                    <a href={hasGitHub ? project.gitHub : ''}><i className={hasGitHub ? "fa-brands fa-github icon" : "hidden"}/></a>
                </div>
            </div>
            <img  className="card-image" src={imgUrl} alt={imgAlt}></img>
            </div>
            <div className="card-body">
                <p>{description}</p>
            </div>
            <div className="card-footer">
                <p>{tools}</p>
            </div>
        </div>
    )
}

export default ProjectCard;