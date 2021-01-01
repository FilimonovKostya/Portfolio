import React from "react";
import style from './Projects.module.scss'
import {Project} from "./Project/Project";

export const Projects = () => {

    const backgroundImg = {
        backgroundImage: `url(${})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center'
    }

    return <section className={style.wrapper}>
        <h2><span> My </span> projects </h2>
        <div className={style.container}>
            <Project backgroundImg={backgroundImg} title={'TodoList'}/>
            <Project backgroundImg={backgroundImg} title={'Social network'}/>
            <Project backgroundImg={backgroundImg} title={'Counter'}/>
            <Project backgroundImg={backgroundImg} title={'Quiz'}/>
        </div>
    </section>
}

