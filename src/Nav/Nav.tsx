import React from 'react';
import style from './Nav.module.css'

export const Nav = () => {
    return <nav className={style.nav}>
        <ul className={style.navItems}>
            <li><a className={style.link} href='../Main/Main.tsx'> Main </a> </li>
            <li><a className={style.link} href="./../Skills/Skills.tsx"> Skills </a> </li>
            <li><a className={style.link} href="./../Projects/Projects.tsx"> Projects </a> </li>
            <li><a className={style.link} href="./../Contact/Contact.tsx"> Contacts </a> </li>
        </ul>
    </nav>
}