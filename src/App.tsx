import React from 'react';
import './App.css';
import {Header} from "./Header/Header";
import {Main} from "./Main/Main";
import {Skills} from "./Skills/Skills";
import {Job} from "./Job/Job";
import {Projects} from "./Projects/Projects";
import Contact from "./Contact/Contact";
import Copyright from "./Copyright/Copyright";

function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <Skills/>
            <Projects/>
            <Job/>
            <Contact/>
            <Copyright/>
        </div>
    );
}


export default App;
