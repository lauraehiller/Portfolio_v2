import { useEffect, useState } from "react";
import { supabase } from "../../lib/supabase";
import ExperienceCard from "../../components/ExperienceCard/ExperienceCard";
import "./Experience.scss";

const ExperienceSection = () => {
  const [experienceList, setExperience] = useState([]);
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
        {experienceList.map((item) => (
          <ExperienceCard key={item.Id} data={item} />
        ))}
      </div>
    </section>
  );
};
export default ExperienceSection;
