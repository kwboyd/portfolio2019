import React from "react";
import ReactDOM from "react-dom";
import Header from './Header';
import ProjectsList from './ProjectsList';
import About from './About';

const App = () => {
    return (
        <div>
            <Header></Header>
            <About></About>
            <ProjectsList></ProjectsList>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById("root"));