import React from "react";
import style from "./Project.module.css";

type ProjectPropsType = {
    backgroundImg: {}
}

export const Project = (props: ProjectPropsType) => {
    return <div className={style.projectBlock}>
        <div className={style.bgImage} style={props.backgroundImg}> <a href="https://github.com/FilimonovKostya" className={style.watchBtn}> Watch </a></div>
        <div className={style.projectFooter}>
            <h4>Name Project</h4>
            <p>Description</p>
        </div>
    </div>
}
