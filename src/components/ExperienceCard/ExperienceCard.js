import React, { useState } from "react";
import "./ExperienceCard.scss";

const Experience = (data) => {
  //console.log(data);
  const { Index, Title, StartedOn, EndedOn, Description } = data.data;
  let [isVisible, setVisible] = useState(Index === 0 ? true : false);

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
          <h3>{Title}</h3>
          <p>
            {StartedOn} - {EndedOn}
          </p>
        </div>
        <div className={isVisible ? "experience-body" : "hidden"}>
          {/* <p>{company}</p> */}
          <br />
          <div className="list-wrapper">
            {/* <ul>{renderList}</ul> */}
            <p>{Description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
