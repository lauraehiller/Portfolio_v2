import { useEffect, useState } from "react";
import { supabase } from "../../lib/supabase";
import Job from "../../components/Job/Job";
import "./Experience.scss";

const ExperienceSection = () => {
  const [Experiences, setExperience] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getExperiences() {
      const { data, error } = await supabase
        .from("Experience")
        .select("*")
        .order("DisplayOrder", { ascending: true });

      if (error) {
        console.error(error);
      } else {
        setExperience(data);
      }

      setLoading(false);
    }

    getExperiences();
  }, []);

  if (loading) {
    return <p>Loading Experiences...</p>;
  }

  return (
    <section id="experience-section">
      <h2>Experience</h2>
      <div className="container">
        {Experiences.map((job) => (
          <Job key={job.Id} job={job} />
        ))}
      </div>
    </section>
  );
};
export default ExperienceSection;
