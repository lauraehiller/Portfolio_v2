import React from 'react';
import './Featured.scss';
import spacelabImg from '../../images/componentassets/projectassets/SpaceLab.png';

function Featured() {
    return (
        <div className="featured-section">
            <div className="featured-container">
                <div className="item1">
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
                                <i src="" className="fa-solid fa-arrow-up-right-from-square"></i>
                                <i className="fa-brands fa-github"></i>
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