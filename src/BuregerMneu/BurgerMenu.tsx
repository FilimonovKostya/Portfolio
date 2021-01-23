import React from 'react';
import style from './BuregerMenu.module.scss'
import {Link} from "react-scroll/modules";

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
                        <Link  to="preview"  className={style.navigationLink}><span  className={style.navigationLink}> Main</span></Link>

                    </li>
                    <li className={style.navigationItem}>
                        <a href="AboutMe" className={style.navigationLink}>About me</a>
                    </li>
                    <li className={style.navigationItem}>
                        <a href="#" className={style.navigationLink}>Projects</a>
                    </li>
                    <li className={style.navigationItem}>
                        {/*<a href="#" className={style.navigationLink}>Contact with me</a>*/}
                        <Link to="contact" className={style.navigationLink}>Contact with me</Link>
                    </li>

                </ul>
            </nav>
        </div>
    </div>
};

export default BurgerMenu;