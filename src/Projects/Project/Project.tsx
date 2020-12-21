import React from "react";
import style from "./Project.module.css";
import background from "../../assets/img/background.jpeg";

type ProjectPropsType = {
    backgroundImg: {}
    title: string
}

export const Project = (props: ProjectPropsType) => {
    return <div className={style.box}>
        <div className={style.imgBx}>
            <img src={background} alt=""/>
        </div>
        <div className={style.content}>
            <span> {props.title} </span>
        </div>
    </div>

}
