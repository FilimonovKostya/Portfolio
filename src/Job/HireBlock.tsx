import React from "react";
import style from "./HireBlock.module.scss";

export const HireBlock = () => {
  return <section className={style.wrapper}>
      <div className={style.hireBLock}>
        <h4>Download CV</h4>
        <button className={style.button}>Click</button>
      </div>
    </section>
  
};
