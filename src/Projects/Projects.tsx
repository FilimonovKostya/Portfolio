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

    return <div className={style.wrapper}>
        <div className={style.container}>
            <div><h3>My projects</h3></div>
            <div className={style.projectsBlock}>
                <Project backgroundImg={backgroundImg}/>
            </div>
        </div>
    </div>
}