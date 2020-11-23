import React from "react";
import style from './Skil.module.css'


type SkillPropsType = {
    description: string
    skillLogo: string
    title: string
}

export const Skill = (props: SkillPropsType) => {
    return <div className={style.skill}>
        <div><img className={style.skillLogo} src={props.skillLogo} alt="JavaScript"/><p>{props.title}</p></div>
        <div className={style.descriptionSkills}> {props.description} </div>
    </div>
}