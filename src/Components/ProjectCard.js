import "./ProjectCard.css";
import React from "react";

const ProjectCard = (props) => {
  return (
    <div className="project-card">
      <a href={props.view_url} target="_blank">
        <img src={props.Img_source} alt="projects" />
      </a>
      <h2 className="project-title">{props.title}</h2>
      <div className="project-detals">
        <p>{props.text}</p>
        <div className="project-btns">
          <a href={props.view_url} target="_blank" className="btn">
            View
          </a>
          <a href={props.src_url} target="_blank" className="btn">
            Source
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
