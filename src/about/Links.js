import React from 'react';
import './Links.scss';

const linkList = [
    {
        url: 'https://github.com/kwboyd',
        text: 'GitHub'
    },
    {
        url: 'https://twitter.com/kwboyd_',
        text: 'Twitter'
    },
    {
        url: 'https://www.linkedin.com/in/kate-boyd-718229109/',
        text: 'LinkedIn'
    },
    {
        url: '/assets/Kate_Boyd_Resume.pdf',
        text: 'Resume'
    },
    {
        url: 'http://podcast.womenintechshow.com/df04d003',
        text: 'Hear me as a guest on the Women in Tech podcast'
    }
]

const Links = () => {
    return (
        <div className="links content-column">
            <h3>Other places I exist:</h3>
            <ul>
                {
                    linkList.map((link, index) => (
                        <li key={link.url} className={`link-${index}`}>
                            <a href={link.url} target="_blank" rel="noopener noreferrer" >{link.text}</a>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Links;