import React from "react";
import style from './Skil.module.css'


type SkillPropsType = {
    description: string
    skillLogo: string
    title: string
}

// export const Skill = React.memo( (props: SkillPropsType) => {
//     return <div className={style.skillBlock}>
//         <img className={style.skillLogo} src={props.skillLogo}  alt={props.title}/>
//         <h3 >{props.title}</h3>
//         <p> {props.description} </p>
//     </div>
// })

//
// export const Skill = React.memo((props: SkillPropsType) => {
//     return <div className={style.skillBlock}>
//         <img className={style.skillLogo} src={props.skillLogo} alt={props.title}/>
//         <h3>{props.title}</h3>
//     </div>
// })


export const Skill = React.memo((props: SkillPropsType) => {
    return <div className={style.c100}>
        <img src={props.skillLogo} className={style.skillLogo} alt={props.title}/>
        <div className={style.slice}>
            <div className={style.bar}/>
        </div>
    </div>

})