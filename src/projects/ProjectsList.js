import React from "react";
import projects from '../data/projects';
import Project from './Project';

const ProjectsList = () => {
    return (
        <section className="projects-list">
            {
                projects.map(project => (
                    <Project project={project} key={project.id} />
                ))
            }
        </section>
    )
}

export default ProjectsList;