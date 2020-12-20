import React from "react";
import style from './Skil.module.css'


type SkillPropsType = {
    description: string
    skillLogo: string
    title: string
}


export const Skill = React.memo((props: SkillPropsType) => {
    return <div>
        <div className={style.c100}>
            <img src={props.skillLogo} className={style.skillLogo} alt={props.title}/>
            <div className={style.slice}>
                <div className={style.bar}/>
            </div>
        </div>
        <span className={style.span}>{props.title}</span>
    </div>
})