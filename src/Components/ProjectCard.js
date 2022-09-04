import "./ProjectCard.css";
import React from "react";
import { NavLink, Link } from "react-router-dom";

const ProjectCard = (props) => {
  return (
    <div className="project-card">
      <Link to={props.view_url}>
        <img src={props.Img_source} alt="projects" />
      </Link>
      <h2 className="project-title">{props.title}</h2>
      <div className="project-detals">
        <p>{props.text}</p>
        <div className="project-btns">
          <NavLink to={props.view_url} className="btn">
            View
          </NavLink>
          <NavLink to={props.src_url} className="btn">
            Source
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
