import React from "react";
import "./ProjectCard.scss";

const ProjectCard = (data) => {
  // console.log(data.data);
  const { Name, WebsiteLink, Description, GithubLink } = data.data;
  const isVisible = data.isVisible;

  return (
    <div className={`card ${isVisible ? "grow" : "shrink"}`}>
      <div className="card-header">
        <div className="card-title">
          <h4>{Name}</h4>
          <div>
            <a href={WebsiteLink ? WebsiteLink : ""}>
              <i
                className={
                  WebsiteLink
                    ? "fa-solid fa-arrow-up-right-from-square icon"
                    : "hidden"
                }
              />
            </a>
            <a href={GithubLink ? GithubLink : ""}>
              <i
                className={GithubLink ? "fa-brands fa-github icon" : "hidden"}
              />
            </a>
          </div>
        </div>
        {/* <img className="card-image" src={imgUrl} alt={imgAlt}></img> */}
      </div>
      <div className="card-body">
        <p>{Description}</p>
      </div>
      <div className="card-footer">{/* <p>{tools}</p> */}</div>
    </div>
  );
};

export default ProjectCard;
