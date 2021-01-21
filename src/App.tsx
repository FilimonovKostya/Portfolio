import React from 'react';
import './App.css';
import {Preview} from "./Preview/Preview";
import {HireBlock} from "./Job/HireBlock";
import {Projects} from "./Projects/Projects";
import Contact from "./Contact/Contact";
import {AboutMe} from "./AboutMe/AboutMe";

function App() {


    //  // const [hide, setHide] = useState(true)
    //  const [size, setSize] = useState(window.innerWidth)
    //
    // useEffect(() => {
    //     if(size < 1000) {
    //         alert('Small')
    //     }
    // },[window.innerWidth])

    return (
        <div className="App">
            {/*{size < 1000 ? <h1>HELLO WORLD </h1> : null}*/}
            <Preview/>
            <AboutMe/>
            <Projects/>
            <HireBlock/>
            <Contact/>
        </div>
    );
}


export default App;
