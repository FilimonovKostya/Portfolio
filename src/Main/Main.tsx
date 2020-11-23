import React from "react";
import style from './Main.module.css'

export const Main = () => {
    return <div className={style.wrapper}>
        <div className={style.container}>
            <div className={style.aboutMe}>
                <p>Hi there</p>
                <h1>I am Filimonov Kostya</h1>
                <p>React Developer</p>
            </div>
            <div className={style.avatar}><img src="" alt=""/></div>
        </div>
    </div>
}