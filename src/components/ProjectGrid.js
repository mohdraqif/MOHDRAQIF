import React from 'react';

const ProjectGrid = (props) => {
  return (
    <div className="item item--medium">
      <article className="room">
        <p className="project-name">{props.title}</p>
      </article>
    </div>
  );
}

export default ProjectGrid;
