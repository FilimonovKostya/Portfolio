import React, {useLayoutEffect, useState} from "react";
import style from "./Preview.module.scss"
import LightSpeed, {Flip} from "react-awesome-reveal";

export const Preview = () => {

    function useWindowSize() {
        const [size, setSize] = useState([0, 0]);
        useLayoutEffect(() => {
            function updateSize() {
                setSize([window.innerWidth, window.innerHeight]);
            }

            window.addEventListener('resize', updateSize);
            updateSize();
            return () => window.removeEventListener('resize', updateSize);
        }, []);
        return size;
    }

    const [width, height] = useWindowSize();

    return <section className={style.wrapper}>
        <div className={style.colorBlock}/>
        <div className={style.container}>
            {width > 1000 ? <Flip direction={'vertical'} duration={1300} className={style.avatar}>
                <div/>
            </Flip> : <div className={style.avatar}/>}
            <div className={style.aboutMe}>
                {
                    width > 1000
                        ? <LightSpeed>
                            <p className={style.aboutMeText}>Hi there!</p>
                            <h1 className={style.heading}>I am <span className={style.surname}> Filimonov Konstantin</span></h1>
                            <p className={style.aboutMeFooterText}>Front-end developer who loves React and Information Technology
                            </p>
                            <a href={"google.com"} className={style.btn}> More about me </a>
                        </LightSpeed>

                        : <> <p className={style.aboutMeText}>Hi there!</p>
                            <h1 className={style.heading}>I am <span className={style.surname}> Filimonov Konstantin</span></h1>
                            <p className={style.aboutMeFooterText}>Front-end developer who loves React and Information Technology
                            </p>
                            <a href={"google.com"} className={style.btn}> More about me </a></>}
            </div>
        </div>
    </section>

}