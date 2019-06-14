import React from 'react';
import './Header.scss';

const Header = () => {
    return (
        <section className="header">
            {
                [1, 2, 3].map(num => (
                    <div className="gradient" id={`gradient-${num}`} key={num}></div>
                ))
            }
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