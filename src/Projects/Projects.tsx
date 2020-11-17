import React from "react";
import style from './Projects.module.css'
import background from '../assets/img/background.jpeg'

export const Projects = () => {

    const backgroundImg = {
        backgroundImage: `url(${background})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center'
    }

    return <div className={style.blockProjects}>
        <div className={style.aboutProjects}>
            <div className={style.projectHeader}><h3>My Projects</h3></div>

            <div className={style.containerProject}>
                <div className={style.ownProjects}>
                    <div style={backgroundImg} className={style.backgroundImg}>
                        <button className={style.buttonWatch}>Watch</button>
                    </div>
                    <h4>Name Project</h4>
                    <p>Description</p>
                </div>


                <div className={style.ownProjects}>
                    <div style={backgroundImg} className={style.backgroundImg}>
                        <button className={style.buttonWatch}>Watch</button>
                    </div>
                    <h4>Name Project</h4>
                    <p>Description</p>
                </div>
            </div>

        </div>
    </div>
}