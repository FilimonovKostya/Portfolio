import React from "react";
import style from "./Information.module.scss";


export const MainInformation = React.memo(() => {
    return <ul className={style.informationList}>
        <li>First Name: <span>Konstantin </span></li>
        <li>Last Name: <span>Filimonov</span></li>
        <li>Age: <span>24</span></li>
        <li>Nationality: <span>Belarus</span></li>
    </ul>
})