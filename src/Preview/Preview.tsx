import React from "react";
import style from "./Preview.module.scss"

export const Preview = () => {
    return <section className={style.wrapper}>
        <div className={style.colorBlock}/>
        <div className={style.container}>
            <div className={style.avatar}/>
            <div className={style.aboutMe}>
                <p className={style.aboutMeText}>Hi there!</p>
                <h1 className={style.heading}>I am <span className={style.surname}> Filimonov Konstantin</span></h1>
                <p className={style.aboutMeFooterText}>Front-end developer who loves React and Information Technology
                </p>
                <a href="#" className={style.btn}> More about me </a>
            </div>
        </div>
    </section>
}