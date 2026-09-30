import React, { useState } from "react";
import "./ExperienceCard.scss";

const Experience = (data) => {
  //console.log(data);
  const experience = data.data;
  let index = data.index;
  let title = experience.Title;
  // let company = experience.company;
  let startedOn = experience.startedOn;
  let endedOn = experience.endedOn;
  let description = experience.Description;
  let [isVisible, setVisible] = useState(index === 0 ? true : false);

  // const renderList = description.map((result) => {
  //   return (
  //     <li id="result" key={result}>
  //       {result}
  //     </li>
  //   );
  // });

  const toggleVisibility = () => {
    isVisible ? setVisible(false) : setVisible(true);
  };

  return (
    <div className="experience-wrapper">
      <div className="experience" onClick={toggleVisibility}>
        <div className="experience-header">
          <h3>{title}</h3>
          <p>
            {startedOn} - {endedOn}
          </p>
        </div>
        <div className={isVisible ? "experience-body" : "hidden"}>
          {/* <p>{company}</p> */}
          <br />
          <div className="list-wrapper">
            {/* <ul>{renderList}</ul> */}
            <p>{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
