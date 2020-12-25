import React from "react";
import style from "../Information/Information.module.css";

export const SecondaryInformation = React.memo(() => {
    return <ul className={style.informationList}>
        <li>Address: <span>Mogilev</span></li>
        <li>Phone: <span>+375-25-905-14-24</span></li>
        <li>Email: <span> konstantinfilimonou@gmail.com</span></li>
        <li>Language: <span>English(A2)</span></li>

    </ul>
})