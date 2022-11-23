import React from 'react';
import Job from '../../components/Job/Job';
import './Experience.scss';

function Experience() {
    return (
        <section id="experience-section">
        <h2>Experience</h2>
        <div className="container">
        <Job 
          title="Lead WebGL Dev Intern (Frontend)"
          company="SpaceLab"
          dates="Oct. 2022 - Present"
          description= {[
            {line: "Lead WebGL team, organize and administer project strategy and workflow, collaborate with 25+ members"}, 
            {line: "Work closely with the Frontend team to implement new features"}, 
            {line: "Design and build 3D web app to render NASA and CalTech data on over 9,000 Exoplanets"}]}
        />
        <Job 
          title="Web Developer"
          company="PV Magazine"
          dates="Aug. 2022 - Present"
          description= {[
            {line: "Design and implement strategies for web growth i.e. website design, Search Engine Optimization, marketing"}, 
            {line: "Create and design email marketing campaigns for an audience of over 1,200 readers"}]}
        />
        <Job 
          title= "Web Developer (Freelance)"
          company= "EmpoweredU"
          dates= "Jan. 2021 - Mar. 2021"
          description= {[
            {line: "Designed and built the EmpoweredU website in WordPress"},
            {line: "Worked directly with the client to develop a visually pleasing, responsive, and user-friendly website according to their specifications"}]}
        />
        <Job 
          title= "Tutor - Computer Systems & Assembly"
          company= "Univ. of California"
          dates= "Sept. 2019 - Dec. 2021"
          description= {[
            {line: "Educated more than 1,000 undergraduate students on computer fundamentals e.g. logic, design, memory, assembly language, and debugging techniques"}, 
            {line: "Organized and conducted weekly tutoring sessions that focused on reviewing class concepts, explicating assignments, and assisting with debugging"}]}
        />
        <Job 
          title="Grader - Tech Writing for Engineers"
          company="Univ. of California"
          dates="Sept. 2021 - Mar. 2022"
          description= {[
            {line: "Provided feedback on over 200 student assignments. "}, 
            {line: "Advised students on effective written and verbal communication and professional presentation "}]}
        />
        <Job 
          title="Tutor - Introduction to 3D Animation"
          company="Univ. of California"
          dates="Sept. 2020 - Dec. 2020"
          description= {[
            {line: "Educated students on 3D Animation concepts and using Blender to create assets, animations, textures, and effects"}, ]}
        />
        </div>
    </section>
    )
  };
  
  export default Experience;