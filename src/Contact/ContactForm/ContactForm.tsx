import style from "./ContactForm.module.scss";
import React, {useLayoutEffect, useState} from "react";
import {Roll} from "react-awesome-reveal";

export const ContactForm = () => {

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

    return width > 1000
        ? <Roll duration={1300}>
            <div className={style.contactsData}>
                <div className={style.nameEmailSubject}>
                    <input type="text" name={'name'} placeholder={'Your name'}/>
                    <input type="email" name={'email'} placeholder={'Your email'}/>
                    <input type="text" placeholder={'Your subject'}/>
                </div>
                <div className={style.textarea}>
                    <textarea placeholder={'Your message'}/>
                    <button type={"submit"} className={style.btn}> Send Message</button>
                </div>
            </div>
        </Roll>

        : <div className={style.contactsData}>
            <div className={style.nameEmailSubject}>
                <input type="text" name={'name'} placeholder={'Your name'}/>
                <input type="email" name={'email'} placeholder={'Your email'}/>
                <input type="text" placeholder={'Your subject'}/>
            </div>
            <div className={style.textarea}>
                <textarea placeholder={'Your message'}/>
                <button type={"submit"} className={style.btn}> Send Message</button>
            </div>
        </div>
}