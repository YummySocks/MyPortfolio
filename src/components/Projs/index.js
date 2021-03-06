import React from "react";
import { removeHyphensAndCapitalize } from '../../utils/helpers';

function Projs({project}){
    const { name, repo, link, description } = project;
    return(
    <div className="project" key={name}>
      <img
        src={require(`../../assets/images/${name}.jpg`)}
        alt={removeHyphensAndCapitalize(name)}
        className="project-bg"
      />
      <div className="project-text">
        <h3>
          <a href={link} rel="noreferrer" target="_blank">{removeHyphensAndCapitalize(name)}</a>{' '}
          <a href={repo} rel="noreferrer" target="_blank">
            <i className="fab fa-github"></i>
          </a>
        </h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default Projs