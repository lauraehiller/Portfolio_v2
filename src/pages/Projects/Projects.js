import React, { useState, useEffect } from "react";
import { supabase } from "../../lib/supabase";
import ProjectCard from "../../components/ProjectCard/ProjectCard.js";
import Featured from "../../components/Featured/Featured.js";
import { featuredList } from "./ProjectHelper.js";
import "./Projects.scss";

const ProjectSection = () => {
  const [projectList, setProject] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isVisible, setVisibility] = useState(false);
  const [buttonText, setbuttonText] = useState("View Project Archive");

  const showProjects = () => {
    setVisibility(!isVisible);
  };

  useEffect(() => {
    isVisible
      ? setbuttonText("Hide Project Archive")
      : setbuttonText("View Project Archive");
  }, [isVisible]);

  useEffect(() => {
    async function getProjects() {
      const { data, error } = await supabase
        .from("Project")
        .select("*")
        .order("DisplayOrder", { ascending: true });

      if (error) {
        console.error(error);
      } else {
        setProject(data);
      }

      setLoading(false);
    }

    getProjects();
  }, []);

  if (loading) {
    return <p>Loading Projects...</p>;
  }

  return (
    <section id="projects-section">
      <h2>Projects</h2>
      {featuredList.map((featured, index) => (
        <Featured key={index} featured={featured} index={index} />
      ))}
      <div className="button-wrap">
        <button onClick={showProjects}>{buttonText}</button>
      </div>
      <div
        className={`container ${
          isVisible ? "container-grow" : "container-shrink"
        }`}
      >
        {projectList.map((item) => (
          <ProjectCard key={item.Id} data={item} isVisible={isVisible} />
        ))}
      </div>
    </section>
  );
};

export default ProjectSection;
