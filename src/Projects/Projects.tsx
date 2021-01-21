import React from "react";
import style from './Projects.module.scss'
import {Project} from "./Project/Project";
import {Zoom} from "react-awesome-reveal";
export const Projects = () => {

    const backgroundImg = {
        backgroundImage: `url()`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center'
    }

    return <section className={style.wrapper}>
        <h2><span> My </span> projects </h2>
        <div className={style.container}>
            <Zoom duration={1500}>
                <Project title={'TodoList'}/>
                <Project title={'Social network'}/>
                <Project title={'Counter'}/>
                <Project title={'Quiz'}/>
            </Zoom>
        </div>
    </section>
}

