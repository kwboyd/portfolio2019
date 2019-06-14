import React from 'react';
import projects from '../data/projects';
import Project from './Project';
import images from '../images/*.png';
import './ProjectsList.scss';

const ProjectsList = () => {
    return (
        <section className="projects-list container row">
            <div className="column full">
                <div className="content-column">
                    <h3>Projects</h3>
                    {
                        projects.map(project => (
                            <Project project={project} key={project.id} image={images[project.image]}/>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default ProjectsList;