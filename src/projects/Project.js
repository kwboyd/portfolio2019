import React from 'react';
import './Project.scss';

const linkTypes = ['repo', 'live', 'docs'];

const Project = ({ project, image }) => {
    const projectLinks = linkTypes.filter(type => project[type]);

    return (
        <div className="project">
            <div className="row justify-between">
                <div className="column half full-width-sm">
                    <h5 className="mobile-only">{project.name}</h5>
                    <img alt={project.name} src={image}/>
                </div>
                <div className="column half full-width-sm">
                    <h5 className="desktop-only">{project.name}</h5>
                    <p className="tools">Tools: {project.tools}</p>
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
                                <p className="awards-header">Awards & Achievements</p>
                                <ul>
                                    {
                                        project.awards.map((award, index) => (
                                            <li key={award} className={`list-${index}`}>{award}</li>
                                        ))
                                    }
                                </ul>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default Project;