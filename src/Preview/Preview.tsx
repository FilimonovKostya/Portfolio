import React from "react";
import style from "./Preview.module.scss"
import {Flip} from "react-awesome-reveal";
import LightSpeed from "react-awesome-reveal";

export const Preview = () => {


    return <section className={style.wrapper}>
        <div className={style.colorBlock}/>
        <div className={style.container}>
            <Flip direction={'vertical'} duration={1300} className={style.avatar}>
                <div/>
            </Flip>
            <div className={style.aboutMe}>
                <LightSpeed  >
                    <p className={style.aboutMeText}>Hi there!</p>
                    <h1 className={style.heading}>I am <span className={style.surname}> Filimonov Konstantin</span></h1>
                    <p className={style.aboutMeFooterText}>Front-end developer who loves React and Information Technology
                    </p>
                    <a href={"google.com"} className={style.btn}> More about me </a>
                </LightSpeed>
            </div>
        </div>
    </section>

}