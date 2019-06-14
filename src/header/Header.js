import React from 'react';
import './Header.scss';

const Header = () => {
    return (
        <section className="header">
            <div className="gradient" id="header-cover"></div>
            <div className="gradient" id="white-left"></div>
            <div className="gradient" id="white-right"></div>
            <div className="gradient" id="white-bottom"></div>
            <div className="header-text">
                <div className="text-box">
                    <h1>Kate Boyd</h1>
                    <h2>Software Engineer</h2>
                </div>
            </div>
        </section>
    )
}

export default Header;