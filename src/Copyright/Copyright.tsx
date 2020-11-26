import React from 'react';
import style from './Copyright.module.css'


const Copyright = () => {
   return <footer className={style.wrapper}>
       <div className={style.container}>
         <h6>Filimonov Kostya</h6>
          <div className={style.footer}>
            <div className={style.footerImgs} />
            <div className={style.footerImgs} />
            <div className={style.footerImgs} />
            <div className={style.footerImgs} />
          </div>
          <p>@ 2020 Все права защищены</p>
       </div>
   </footer>

};

export default Copyright;