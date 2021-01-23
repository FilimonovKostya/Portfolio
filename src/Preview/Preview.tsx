import React from "react";
import style from "./Preview.module.scss"
import LightSpeed, {Flip} from "react-awesome-reveal";
import ReactTypingEffect from "react-typing-effect";

type PreviewPropsType = {
    width: number
}
export const Preview = (props: PreviewPropsType) => {


    return <section className={style.wrapper} id={'preview'}>
        <div className={style.colorBlock}/>
        <div className={style.container}>
            {props.width > 1000 ? <Flip direction={'vertical'} duration={1300} className={style.avatar}>
                <div/>
            </Flip> : <div className={style.avatar}/>}
            <div className={style.aboutMe}>
                {
                    props.width > 1000
                        ? <LightSpeed>
                            <p className={style.aboutMeText}>Hi there!</p>
                            <h1 className={style.heading}>I am <span className={style.surname}> Filimonov Konstantin</span></h1>
                            <ReactTypingEffect text={['Front-end developer who loves React and Information Technology']} eraseSpeed={0} typingDelay={1000}
                                               className={style.aboutMeFooterText}/>
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