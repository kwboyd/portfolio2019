import React from "react";
import Links from './Links';
import AboutText from './AboutText';

const About = () => {
    return (
        <section className="row about">
            <div className="column half">
                <AboutText/>
            </div>
            <div className="column half">
                <Links/>
            </div>
        </section>
    )
}

export default About;