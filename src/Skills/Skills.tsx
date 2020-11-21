import React from "react";
import style from './Skils.module.css'
import {Skill} from "./Skil/Skill";


export const Skills = () => {
    const description = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam cumque deserunt ea harum labore laborum magnam maiores, natus ratione, recusandae'

    return <div className={style.skillsBlock}>
        <div className={`${style.skillsContainer}`}>
            <h2 className={style.title}>Skills</h2>
            <div className={style.skills}>
                <Skill title={'HTML'} description={description}/>

                <Skill title={'CSS'} description={description}/>
                <Skill title={'TypeScript'} description={description}/>
            </div>
        </div>
    </div>
}