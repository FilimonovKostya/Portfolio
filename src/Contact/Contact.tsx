import React from 'react';
import style from './Contact.module.css'

const Contact = () => {
    return <section className={style.inputContainer}>

        <div className={`${style.styledInput} ${style.wide}`}>
            <input type="text" required/>
            <label>Name</label>
        </div>
            <div className={style.styledInput}>
                <input type="text" name='email' required/>
                <label>Email</label>
            </div>
            <div className={style.styledInput}>
                <input type="text" name='phone' required/>
                <label>Phone Number</label>
            </div>
        <div className={`${style.styledInput} ${style.wide}`}>
            <textarea required />
            <label>Message</label>
        </div>
        <div className={style.submitBtn}>Send Message</div> 
    </section>
}

export default Contact;