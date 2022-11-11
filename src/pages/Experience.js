import React from 'react';
import Job from '../components/Job';
import './Experience.scss';

function Experience() {
    return (
        <section className="experience-section">
        <h2>Experience</h2>
        <div className="container">
        <Job 
          title="Lead WebGL Dev (Frontend)"
          company="SpaceLab"
          dates="Oct. 2022 - Present"
          description= {[
            {line: "Lead WebGL team, organize and administer project strategy and workflow, collaborate with 25+ members"}, 
            {line: "Work closely with the Frontend team to implement new features"}, 
            {line: "Design and build 3D web app to render NASA and CalTech data on Exoplanets"}]}
        />
        <Job 
          title="Web Developer"
          company="PV Magazine"
          dates="Aug. 2022 - Present"
          description= {[
            {line: "Collaborate with a team of writers and designers"}, 
            {line: "Design and send out weekly newsletters using MailChimp"}, 
            {line: "Update and maintain company website"}]}
        />
        <Job 
          title= "Web Developer (Freelance)"
          company= "EmpoweredU"
          dates= "Jan. 2021 - Mar. 2021"
          description= {[
            {line: "Worked directly witht he client to design the EmpoweredU Website using WordPress."}]}
        />
        <Job 
          title= "Tutor - Computer Systems & Assembly"
          company= "Univ. of California"
          dates= "Sept. 2019 - Dec. 2021"
          description= {[
            {line: "Taught undergraduate students computer fundamentals e.g. logic, design, memory, debugging techniques and assembly language"}, 
            {line: "Organized and conducted weekly tutoring sessions that focused on reviewing class concepts, explicating assignments, and assisting with debugging"}]}
        />
        <Job 
          title="Grader - Tech Writing for Engineers"
          company="Univ. of California"
          dates="Sept. 2021 - Mar. 2022"
          description= {[
            {line: "Advised students on effective written communication and professional presentation"}, 
            {line: "Graded student assignments including resumes, research essays, and LaTeX documents"}]}
        />
        <Job 
          title="Tutor - Introduction to 3D Animation"
          company="Univ. of California"
          dates="Sept. 2020 - Dec. 2020"
          description= {[
            {line: "Taught students how to use Blender to create assets, animations, textures, and effects"}, ]}
        />
        </div>
    </section>
    )
  };
  
  export default Experience;