import React from 'react';
import ReactDOM from 'react-dom';
import Header from './header/Header';
// import ProjectsList from './projects/ProjectsList';
import About from './about/About';
import './App.scss';

const App = () => {
    return (
        <div>
            <Header/>
            <About/>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));