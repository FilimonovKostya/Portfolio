import React from "react";
import style from './Skils.module.css'
import {Skill, Test} from "./Skil/Skill";
import ts from '../assets/img/tsLogo.svg'
import react from '../assets/img/reactLogo.svg'
import redux from '../assets/img/redux-seeklogo.com.svg'
import js from '../assets/img/jsLogo.svg'
import html from '../assets/img/htmlLogo.svg'
import css from '../assets/img/cssLogo.svg'
import git from '../assets/img/gitLogo.svg'
import mui from '../assets/img/muiLogo.svg'


export const Skills = () => {
    const description = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam cumque deserunt ea harum labore laborum magnam maiores, natus ratione, recusandae'

    return <section className={style.wrapper}>
        <h1 className={style.title}><span> My</span> skills</h1>
        <div className={style.container}>
            <div className={style.skillsBlock}>
                <Skill title={'TypeScript'} description={description} skillLogo={ts}/>
                <Skill title={'React'} description={description} skillLogo={react}/>
                <Skill title={'Redux'} description={description} skillLogo={redux}/>
                <Skill title={'JavaScript'} description={description} skillLogo={js}/>
                <Skill title={'Html'} description={description} skillLogo={html}/>
                <Skill title={'Css'} description={description} skillLogo={css}/>
                <Skill title={'Git'} description={description} skillLogo={git}/>
                <Skill title={'Material UI'} description={description} skillLogo={mui}/>
            </div>
        </div>
    </section>

}