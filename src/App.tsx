import React from 'react';
import './App.css';
import {Preview} from "./Preview/Preview";
import {HireBlock} from "./Job/HireBlock";
import {Projects} from "./Projects/Projects";
import Contact from "./Contact/Contact";
import {AboutMe} from "./AboutMe/AboutMe";

function App() {
    return (
        <div className="App">
            <Preview/>
            <AboutMe/>
            <Projects/>
            <HireBlock/>
            <Contact/>
        </div>
    );
}


export default App;
