import React from 'react';
import './App.css';
import {AboutMe} from "./Main/Main";
import {Skills} from "./Skills/Skills";
import {HireBlock} from "./Job/HireBlock";
import {Projects} from "./Projects/Projects";
import Contact from "./Contact/Contact";

function App() {
    return (
        <div className="App">
            <AboutMe/>
            <Skills/>
            <Projects/>
            <HireBlock/>
            <Contact/>
        </div>
    );
}


export default App;
