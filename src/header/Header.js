import React from 'react';
import './Header.scss';

const Header = () => {
    return (
        <section className="header">
            <div className="gradient" id="gradient-2"></div>
            <div className="gradient" id="gradient-3"></div>
            <div className="gradient" id="gradient-4"></div>
            <div className="header-text">
                <div>
                    <h1>Kate Boyd</h1>
                    <h2>Software Engineer</h2>
                </div>
            </div>
        </section>
    )
}

export default Header;