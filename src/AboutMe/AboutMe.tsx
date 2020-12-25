import React from "react";
import style from './AboutMe.module.css'
import {Skill} from "./Skill/Skill";
import ts from '../assets/img/tsLogo.svg'
import react from '../assets/img/reactLogo.svg'
import redux from '../assets/img/redux-seeklogo.com.svg'
import js from '../assets/img/jsLogo.svg'
import html from '../assets/img/htmlLogo.svg'
import css from '../assets/img/cssLogo.svg'
import git from '../assets/img/gitLogo.svg'
import mui from '../assets/img/muiLogo.svg'
import {MainInformation} from "./Information/MainInformation";
import {SecondaryInformation} from "./Information/SecondaryInformation";


export const AboutMe = () => {

    return <section className={style.wrapper}>
        <h2 className={style.title}> About <span> Me </span></h2>
        <div className={style.personalInfo}>
            <h3> Personal Information </h3>
            <div className={style.information}>
                <MainInformation/>
                <SecondaryInformation/>
            </div>
        </div>
        <div className={style.container}>
            <h3>My skills </h3>
            <div className={style.skillsBlock}>
                <Skill title={'TypeScript'} skillLogo={ts}/>
                <Skill title={'React'} skillLogo={react}/>
                <Skill title={'Redux'} skillLogo={redux}/>
                <Skill title={'JavaScript'} skillLogo={js}/>
                <Skill title={'Html'} skillLogo={html}/>
                <Skill title={'Css'} skillLogo={css}/>
                <Skill title={'Git'} skillLogo={git}/>
                <Skill title={'Material UI'} skillLogo={mui}/>
            </div>
        </div>
    </section>

}


