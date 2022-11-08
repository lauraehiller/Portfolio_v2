import React from 'react';

import './ProjectCard.scss';

class ProjectCard extends React.Component {
    constructor() {
        super();
        this.state = {
            isVisible: false
        };
    }

    toggleVisibility = () => {
        this.setState(prevstate => ({ isVisible: !prevstate.isVisible}));
    }

    render() {
        return (
            <div className="card">
              <div className="card-header">  
                <div className="card-title">
                    <h4>{this.props.name}</h4>
                    <div>
                        <i src={this.props.projectLink} className="fa-solid fa-arrow-up-right-from-square"></i>
                        <i className={this.props.github ? "fa-brands fa-github" : "hidden"}></i>
                    </div>
                </div>
                <img  className="card-image" src={this.props.imgUrl} alt={this.props.imgAlt}></img>
              </div>
                <div className="card-body">
                    <p>{this.props.description}</p>
                </div>
              <div className="card-footer">
                    <p>{this.props.tools}</p>
              </div>
            </div>
        )
    }
}

export default ProjectCard;