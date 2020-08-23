import React from "react";
import "./style.css";



function projectCard(props) {
  return (
    
    <div className="card col-sm-12 col-md-5">
    <div className="img-container">
      <img alt={props.name} src={props.img} />
    </div>
    <div className="content">
      <ul>
        <li>
          <strong>Name:</strong> {props.name}
        </li>
        <li>
          <strong>Description:</strong> {props.description}
        </li>
        <li>
          <a href={props.deployedLink} className="btn btn-info" target="_blank"><strong>Working App</strong>
                </a>
        </li>
        <li>
        <a href={props.githubLink} className="btn btn-info" target="_blank"><strong>Github</strong>
</a>
        </li>
      </ul>
    </div>
  </div>
);
}

export default projectCard;
