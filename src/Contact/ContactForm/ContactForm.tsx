import style from "./ContactForm.module.scss";
import React from "react";

export const ContactForm = () => {
    return <div className={style.contactsData}>
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