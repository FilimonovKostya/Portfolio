import React from "react";
import style from './Projects.module.scss'
import {Project} from "./Project/Project";
import {Zoom} from "react-awesome-reveal";

type ProjectsPropsType = {
    width: number
}

export const Projects = (props: ProjectsPropsType) => {

    // const backgroundImg = {
    //     backgroundImage: `url()`,
    //     backgroundSize: 'cover',
    //     backgroundRepeat: 'no-repeat',
    //     backgroundPosition: 'center'
    // }


    return <section className={style.wrapper}>
        <h2><span> My </span> projects </h2>
        <div className={style.container}>
            {props.width > 1000
                ? <Zoom duration={1500}>
                    <Project title={'TodoList'}/>
                    <Project title={'Social network'}/>
                    <Project title={'Counter'}/>
                    <Project title={'Quiz'}/>
                </Zoom>
                : <>
                    <Project title={'TodoList'}/>
                    <Project title={'Social network'}/>
                    <Project title={'Counter'}/>
                    <Project title={'Quiz'}/>
                </>
            }
        </div>
    </section>
}

