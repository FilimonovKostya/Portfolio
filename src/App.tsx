import React from 'react';
import './App.css';
import {Header} from "./Header/Header";
import {AboutMe} from "./Main/Main";
import {Skills} from "./Skills/Skills";
import {HireBlock} from "./Job/HireBlock";
import {Projects} from "./Projects/Projects";
import Contact from "./Contact/Contact";
import Copyright from "./Copyright/Copyright";

function App() {
    return (
        <div className="App">
            <Header/>
            <AboutMe/>
            <Skills/>
            <Projects/>
            <HireBlock/>
            <Contact/>
            <Copyright/>
        </div>
    );
}


export default App;
