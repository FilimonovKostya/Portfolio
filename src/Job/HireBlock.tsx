import React from "react";
import style from "./HireBlock.module.scss";

export const HireBlock = () => {
    return <section className={style.wrapper}>
        <div className={style.hireBLock}>
            <h4>Download CV</h4>
            <a href={'https://drive.google.com/file/d/1fEeDIY3zp4dhDkIaTcX9HFpVoEkkPqh7/view?usp=sharing'} target={'blank'} className={style.button}
               download> Click </a>
        </div>
    </section>

};
