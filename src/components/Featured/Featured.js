import React from 'react';
import './Featured.scss';

const Featured = (featuredObject) => {
    const project = featuredObject.featured;
    let name = project.name;
    let projectLink = project.projectLink;
    let imgUrl = project.imgUrl;
    let imgAlt = project.imgAlt;
    let description = project.description;
    let tools = project.tools;
    let hasGitHub = false;
    if (project.githubLink) {
		hasGitHub = true;
	}
    
    return (
        <div className="featured-project">
            <div className="featured-container">
                <div className="picture">
                    <div className="flex-center">
                        <img src={imgUrl} alt={imgAlt}/>
                    </div>
                </div>
                <div className="featured-card">
                    <div className="featured-header"> 
                        <p className="featured-pre">Featured</p> 
                        <div className="featured-title">
                            <h4>{name}</h4>
                            <div>
                                <a href={projectLink}><i className="fa-solid fa-arrow-up-right-from-square icon"/></a>
                                <a href={hasGitHub ? project.githubLink : ''}><i className={hasGitHub ? "fa-brands fa-github icon" : "hidden"}/></a>
                            </div>
                        </div>
                    </div>
                    <div className="featured-body">
                        <p>{description}</p>
                    </div>
                    <div className="featured-footer">
                            <p>{tools}</p>
                    </div>
                </div>
            </div>
        </div>
    )
  };
  
  export default Featured;