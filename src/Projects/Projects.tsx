import React from "react";
import style from './Projects.module.css'
import background from '../assets/img/background.jpeg'
import {Project} from "./Project/Project";

export const Projects = () => {

    const backgroundImg = {
        backgroundImage: `url(${background})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center'
    }

    return <section className={style.wrapper}>
        <h2>My projects</h2>
        <div className={style.container}>

            <Project backgroundImg={backgroundImg}/>
            <Project backgroundImg={backgroundImg}/>
            <Project backgroundImg={backgroundImg}/>

        </div>
    </section>
}