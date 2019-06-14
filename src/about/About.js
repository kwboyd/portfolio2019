import React from 'react';
import Links from './Links';
import AboutText from './AboutText';
import './About.scss';

const About = () => {
    return (
        <section className="about row container">
            <div className="column half full-width-sm">
                <AboutText/>
            </div>
            <div className="column half full-width-sm">
                <Links/>
            </div>
        </section>
    )
}

export default About;