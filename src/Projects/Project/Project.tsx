import React from "react";
import style from "../Projects.module.css";

type ProjectPropsType = {
    backgroundImg: {}
}

export const Project = (props: ProjectPropsType) => {
    return <div className={style.containerProject}>
        <div className={style.ownProjects}>
            <div style={props.backgroundImg} className={style.backgroundImg}>
                <button className={style.buttonWatch}>Watch</button>
            </div>
            <h4>Name Project</h4>
            <p>Description</p>
        </div>
    </div>
}
