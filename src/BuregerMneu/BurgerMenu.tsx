import React from 'react';
import style from './BuregerMenu.module.scss'


const BurgerMenu = () => {
    return <div>
        <div className={style.navigation}>
            <input type="checkbox" id="navi-toggle" className={style.navigationCheckbox}/>

            <label htmlFor="navi-toggle" className={style.navigationButton}>
				<span className={style.navigationIcon}>
					<span className={style.navigationIconSpan}>&nbsp;</span>
					<span className={style.navigationIconSpan}>&nbsp;</span>
					<span className={style.navigationIconSpan}>&nbsp;</span>
					<span className={style.navigationIconSpan}>&nbsp;</span>
					<span className={style.navigationIconSpan}>&nbsp;</span>
					<span className={style.navigationIconSpan}>&nbsp;</span>
				</span>
            </label>

            <div className={style.navigationBackground}>&nbsp;</div>

            <nav className={style.navigationNav}>
                <ul className={style.navigationList}>
                    <li className={style.navigationItem}>
                        <a href="#" className={style.navigationLink}>Main</a>
                    </li>
                    <li className={style.navigationItem}>
                        <a href="#" className={style.navigationLink}>About me</a>
                    </li>
                    <li className={style.navigationItem}>
                        <a href="#" className={style.navigationLink}>Projects</a>
                    </li>
                    <li className={style.navigationItem}>
                        <a href="#" className={style.navigationLink}>Contact with me</a>
                    </li>

                </ul>
            </nav>
        </div>
    </div>
};

export default BurgerMenu;