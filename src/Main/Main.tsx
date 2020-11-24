import React from "react";
import style from './Main.module.css'
import photo from '../assets/img/myPhoto.jpg'

export const Main = () => {
    return <div className={style.wrapper}>
        <div className={style.container}>
            <div className={style.aboutMe}>
                <p>Hi there</p>
                <h1>I am Filimonov Kostya</h1>
                <p>React Developer</p>
            </div>
            <div ><img className={style.avatar} src={photo} alt="Profile Photo"/></div>
        </div>
    </div>
}