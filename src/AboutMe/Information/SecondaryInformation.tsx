import React from "react";
import style from "./Information.module.scss";

export const SecondaryInformation = React.memo(() => {
    return <ul className={style.informationList}>
        <li>Address: <span>Mogilev</span></li>
        <li>Phone: <span>+375-25-905-14-24</span></li>
        <li>Email: <span> konstantinfilimonou@gmail.com</span></li>
        <li>Language: <span>English(B1)</span></li>

    </ul>
})