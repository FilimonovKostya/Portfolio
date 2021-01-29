import React from "react";
import style from "./Project.module.scss";

type ProjectPropsType = {
    title: string
    technology: string
    linkGithub:string
    linkDemo:string
    img:string
}



export const Project = (props: ProjectPropsType) => {
    return <div className={style.container}>
        <div className={style.card}>
            <div className={`${style.face} ${style.face1}`}>
                <div className={style.content}>
                    <img src={props.img}
                         alt={props.title}/>
                    <h3>{props.title}</h3>
                </div>
            </div>
            <div className={`${style.face} ${style.face2}`}>
                <div className={style.content}>
                    <p>{props.technology}</p>
                    <div className={style.test}>
                        <a href={props.linkDemo} target={'blank'}>View</a>
                        <a href={props.linkGithub} target={'blank'}>Code</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
}
