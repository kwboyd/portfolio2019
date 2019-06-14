import React from 'react';
import Header from './header/Header';
import ProjectsList from './projects/ProjectsList';
import About from './about/About';
import './App.scss';

const App = () => {
    return (
        <div data-testid="root">
            <Header/>
            <About/>
            <ProjectsList/>
        </div>
    )
}

export default App;