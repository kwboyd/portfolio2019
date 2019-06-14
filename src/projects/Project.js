import React from 'react';
import './Project.scss';

const linkTypes = ['repo', 'live', 'docs'];

const Project = ({ project, image }) => {
    const projectLinks = linkTypes.filter(type => project[type]);

    return (
        <div className="project">
            <h5>{project.name}</h5>
            <div className="row justify-between">
                <div className="column half">
                    <img alt={project.name} src={image}/>
                </div>
                <div className="column half">
                    <p>Tools: {project.tools}</p>
                    <p>{project.description}</p>
                    <div className="row">
                        {
                            projectLinks.map(linkType => (
                                <a key={linkType} href={project[linkType]} target="_blank" rel="noopener noreferrer">{linkType}</a>
                            ))
                        }
                    </div>
                    {
                        !!project.awards.length && (
                            <div>
                                <p>Awards & Achievements</p>
                                {
                                    project.awards.map(award => (
                                        <p key={award}>{award}</p>
                                    ))
                                }
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default Project;