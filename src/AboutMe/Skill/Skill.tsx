import React from "react";
import style from './Skil.module.scss'


type SkillPropsType = {
    skillLogo: string
    title: string
}


export const Skill = React.memo((props: SkillPropsType) => {
    return <div className={style.wrapper}>
        <div className={style.c100}>
            <img src={props.skillLogo} className={style.skillLogo} alt={props.title}/>
            <div className={style.slice}>
                <div className={style.bar}/>
            </div>
        </div>
        <span className={style.span}>{props.title}</span>
    </div>
})