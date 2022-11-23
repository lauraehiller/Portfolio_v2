import React from 'react';
import './Featured.scss';
import spacelabImg from '../../images/componentassets/projectassets/SpaceLab.png';

const Featured = () => {
    
    return (
        <div className="featured-project">
            <div className="featured-container">
                <div className="picture">
                    <div className="flex-center">
                        <img src={spacelabImg} alt="Large text that says SpaceLab over a starry background"/>
                    </div>
                </div>
                <div className="featured-card">
                    <div className="featured-header"> 
                        <p className="featured-pre">Featured</p> 
                        <div className="featured-title">
                            <h4>Exoplanetarium 3D</h4>
                            <div>
                                <a href="http://spacelab.space/projects"><i className="fa-solid fa-arrow-up-right-from-square icon"/></a>
                                <a href="https://github.com/spacelabdev/Exoplanetarium-3D"><i className="fa-brands fa-github icon"/></a>
                            </div>
                        </div>
                    </div>
                    <div className="featured-body">
                        <p>An educational and interactive 3D web app rendering 
                            NASA/Caltech data from the K2 and Keplar 
                            Missions on over 9,000 Exoplanets.</p>
                    </div>
                    <div className="featured-footer">
                            <p>React.js · Three.js · WebGL</p>
                    </div>
                </div>
            </div>
        </div>
    )
  };
  
  export default Featured;