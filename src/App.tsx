import React from 'react';
import './App.css';
import {Preview} from "./Preview/Preview";
import {HireBlock} from "./Job/HireBlock";
import {Projects} from "./Projects/Projects";
import Contact from "./Contact/Contact";
import {AboutMe} from "./AboutMe/AboutMe";
import useWindowSize from "./helper";

function App() {
    const {width} = useWindowSize();


    return <div className="App">
        <Preview width={width}/>
        <AboutMe width={width}/>
        <Projects width={width}/>
        <HireBlock/>
        <Contact width={width}/>
    </div>


}


export default App;
