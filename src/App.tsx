import React, {useEffect, useState} from 'react';
import './App.css';
import {Preview} from "./Preview/Preview";
import {HireBlock} from "./Job/HireBlock";
import {Projects} from "./Projects/Projects";
import Contact from "./Contact/Contact";
import {AboutMe} from "./AboutMe/AboutMe";
import BurgerMenu from "./BuregerMneu/BurgerMenu";

function App() {

    function useWindowSize() {
        const [windowSize, setWindowSize] = useState({width: 0});

        useEffect(() => {
            function handleResize() {
                setWindowSize({
                    width: window.innerWidth,
                });
            }

            // Add event listener
            window.addEventListener("resize", handleResize);

            // Call handler right away so state gets updated with initial window size
            handleResize();

            // Remove event listener on cleanup
            return () => window.removeEventListener("resize", handleResize);
        }, []); // Empty array ensures that effect is only run on mount

        return windowSize;
    }

    const size = useWindowSize();


    return <div className="App">
        <BurgerMenu/>
        <Preview width={size.width}/>
        <AboutMe width={size.width}/>
        <Projects width={size.width}/>
        <HireBlock/>
        <Contact width={size.width}/>
    </div>


}


export default App;
