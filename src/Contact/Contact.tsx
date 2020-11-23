import React from 'react';
import style from './Contact.module.css'

const Contact = () => {
    return <div className={style.wrapper}>
        <div className={style.container}>
            <h5>Contacts</h5>
            <div className={style.formBlock}>
            <form className={style.form}>
                <input type="text"/>
                <input type="text"/>
                <textarea placeholder={'Write something...'}/>
            </form>
            </div>
        </div>
    </div>
};

export default Contact;