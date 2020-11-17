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

    return <div className={style.blockProjects}>
        <div className={style.aboutProjects}>

            <div className={style.projectHeader}>
                <h3>My Projects</h3>
            </div>

            <Project backgroundImg={backgroundImg}/>
            <Project backgroundImg={backgroundImg}/>

        </div>
    </div>
}