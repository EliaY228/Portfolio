import "./ProjectCard.css";
import React from "react";
import ProjectCard from "./ProjectCard";
import Projects_Data from "./ProjectsData";

const Project = () => {
  return (
    <div className="work-container">
      <h1 className="project-heading">Projects</h1>
      <div className="project-container">
        {Projects_Data.map((val, ind) => {
          return (
            <ProjectCard
              key={ind}
              Img_source={val.Img_source}
              title={val.title}
              text={val.text}
              view_url={val.view_url}
              src_url={val.src_url}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Project;
