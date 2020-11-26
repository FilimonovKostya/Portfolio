import { link } from 'fs';
import React from 'react';
import style from './Nav.module.css'

export const Nav = () => {
    return <nav className={style.nav}>
        <ul className={style.navItems}>
            <li><a className={style.link} href="#"> Main </a> </li>
            <li><a className={style.link} href="#"> Skills </a> </li>
            <li><a className={style.link} href="#"> Projects </a> </li>
            <li><a className={style.link} href="#"> Contacts </a> </li>
        </ul>
    </nav>
}