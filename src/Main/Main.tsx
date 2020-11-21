import React from "react";
import style from './Main.module.css'

export const Main = () => {
    return <div className={style.mainBlock}>

        <div >

            <div className={style.greeting}>
                <span> Hi There </span>
                <h1> I am Filimonov Kostya </h1>
                <p>React developer</p>
            </div>
            <div className={style.photo}>

            </div>

        </div>
    </div>
}