import React from 'react';
import Links from './Links';
import AboutText from './AboutText';
import './About.scss';

const About = () => {
    return (
        <section className="row about">
            <div className="column two-thirds">
                <AboutText/>
            </div>
            <div className="column third">
                <Links/>
            </div>
        </section>
    )
}

export default About;