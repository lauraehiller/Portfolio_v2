import React from 'react';
import Job from '../../components/Job/Job';
import './Experience.scss';
import {jobList} from './ExperienceHelper.js';

function Experience() {
    return (
        <section id="experience-section">
        <h2>Experience</h2>
        <div className="container">
          {jobList.map((job) => (
              <Job key = {job.title} job={job}/>
          ))}
        </div>
    </section>
    )
  };
  
  export default Experience;