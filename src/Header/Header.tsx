import React from "react";
import style from './Header.module.css'
import {Nav} from "../Nav/Nav";

export const Header = () => {
    return <header className={style.container}>
        <div className={style.header}>
            <Nav/>
        </div>
    </header>
}