import React, { useState } from "react";
import "./Job.scss";

const Job = (jobObject) => {
  console.log(jobObject);
  const job = jobObject.job;
  let index = jobObject.index;
  let title = job.Title;
  // let company = job.company;
  let startedOn = job.startedOn;
  let endedOn = job.endedOn;
  let description = job.Description;
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
    <div className="job-wrapper">
      <div className="job" onClick={toggleVisibility}>
        <div className="job-header">
          <h3>{title}</h3>
          <p>
            {startedOn} - {endedOn}
          </p>
        </div>
        <div className={isVisible ? "job-body" : "hidden"}>
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

export default Job;
