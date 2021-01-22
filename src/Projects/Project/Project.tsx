import React from "react";
import style from "./Project.module.scss";

type ProjectPropsType = {
    title: string
    technology: string
    linkGithub:string
}


export const Project = (props: ProjectPropsType) => {
    return <div className={style.container}>
        <div className={style.card}>
            <div className={`${style.face} ${style.face1}`}>
                <div className={style.content}>
                    <img src="https://github.com/Jhonierpc/WebDevelopment/blob/master/CSS%20Card%20Hover%20Effects/img/design_128.png?raw=true"
                         alt={props.title}/>
                    <h3>{props.title}</h3>
                </div>
            </div>
            <div className={`${style.face} ${style.face2}`}>
                <div className={style.content}>
                    <p>{props.technology}</p>
                    <div className={style.test}>
                        <a href={"google.com"}>View</a>
                        <a href={props.linkGithub} target={'blank'}>Code</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
}
