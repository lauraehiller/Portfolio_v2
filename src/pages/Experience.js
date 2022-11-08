import React from 'react';
import Job from '../components/Job';
import './Experience.scss';

function Experience() {
    return (
        <section className="experience-section">
        <h2>Experience</h2>
        <div className="container">
        <Job 
          title="Web Developer"
          company="PV Magazine"
          dates="August 2022 - Present"
          description= {[
            {line: "Collaborate with a team of writers and designers"}, 
            {line: "Design and send out weekly newsletters using MailChimp"}, 
            {line: "Update and maintain company website."}]}
        />
        <Job 
          title= "Web Developer"
          company= "EmpoweredU"
          dates= "January 2021 - March 2021"
          description= {[
            {line: "Worked directly witht he client to design the EmpoweredU Website using WordPress."}]}
        />
        <Job 
          title= "Tutor for Computer Systems and Assembly"
          company= "Univ. of California"
          dates= "September 2019 - December 2021"
          description= {[
            {line: "Taught undergraduate students computer fundamentals e.g. logic, design, memory, debugging techniques and assembly language"}, 
            {line: "Organized and conducted weekly tutoring sessions that focused on reviewing class concepts, explicating assignments, and assisting with debugging"}]}
        />
        <Job 
          title="Grader for Tech Writing for Engineers"
          company="Univ. of California"
          dates="August 2022 - Present"
          description= {[
            {line: "Advised students on effective written communication and professional presentation"}, 
            {line: "Graded student assignments including resumes, research essays, and LaTeX documents"}]}
        />
        <Job 
          title="Tutor for Introduction to 3D Animation"
          company="Univ. of California"
          dates="August 2022 - Present"
          description= {[
            {line: "Taught students how to use Blender to create assets, animations, textures, and effects"}, ]}
        />
        </div>
    </section>
    )
  };
  
  export default Experience;