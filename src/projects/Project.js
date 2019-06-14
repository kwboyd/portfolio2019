import React from 'react';

const Project = ({ project }) => {
    return (
        <div className="project">
            <p>{project.name}</p>
        </div>
    )
}

export default Project;