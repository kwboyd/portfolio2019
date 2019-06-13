import React from "react";
import projects from './data/projects';
import Project from './Project';

const ProjectsList = () => {
    return (
        <section className="projects-list">
            {
                projects.map(project => (
                    <Project project={project}/>
                ))
            }
        </section>
    )
}

export default ProjectsList;