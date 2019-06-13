import React from "react";
import projects from './data/projects';
import Project from './Project';

const ProjectsList = () => {
    return (
        <div className="projects-list">
            {
                projects.map(project => (
                    <Project project={project}></Project>
                ))
            }
        </div>
    )
}

export default ProjectsList;