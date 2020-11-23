import React from "react";
import style from './Skils.module.css'
import {Skill} from "./Skil/Skill";
import tsLogo from '../assets/img/tsLogo.svg'
import reactLogo from '../assets/img/reactLogo.svg'

export const Skills = () => {
    const description = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam cumque deserunt ea harum labore laborum magnam maiores, natus ratione, recusandae'

    return <div className={style.wrapper}>
        <div className={style.container}>
            <div><h3>My skills</h3></div>
            <div className={style.skillsBlock}>
                <Skill title={'TypeScript'} description={description} skillLogo={tsLogo}/>
                <Skill title={'React'} description={description} skillLogo={reactLogo}/>
            </div>
        </div>
    </div>

}