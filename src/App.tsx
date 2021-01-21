import React, {useLayoutEffect, useState} from 'react';
import './App.css';
import {Preview} from "./Preview/Preview";
import {HireBlock} from "./Job/HireBlock";
import {Projects} from "./Projects/Projects";
import Contact from "./Contact/Contact";
import {AboutMe} from "./AboutMe/AboutMe";

function App() {

    function useWindowSize() {
        const [size, setSize] = useState([0, 0]);
        useLayoutEffect(() => {
            function updateSize() {
                setSize([window.innerWidth, window.innerHeight]);
            }

            window.addEventListener('resize', updateSize);
            updateSize();
            return () => window.removeEventListener('resize', updateSize);
        }, []);
        return size;
    }


    const [width, height] = useWindowSize();
    return <div className="App">
        <h1>{width} * {height}</h1>
        <Preview/>
        <AboutMe/>
        <Projects/>
        <HireBlock/>
        <Contact/>
    </div>


}


export default App;
