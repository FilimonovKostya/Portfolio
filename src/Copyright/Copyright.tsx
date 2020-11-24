import React from 'react';
import style from './Copyright.module.css'


const Copyright = () => {
   return <div className={style.wrapper}>
       <div className={style.container}>
         <h6>Filimonov Kostya</h6>
          <div className={style.footer}>
            <div className={style.block} />
            <div className={style.block} />
            <div className={style.block} />
            <div className={style.block} />
          </div>
          <div><p>@ 2020 Все права защищены</p></div>
       </div>
   </div>

};

export default Copyright;