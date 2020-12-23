import React from 'react';
import style from './Contact.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faEnvelopeOpen, faEnvelopeSquare, faPhoneSquareAlt} from '@fortawesome/free-solid-svg-icons'

const Contact = () => {
    // return <section className={style.inputContainer}>
    //
    //
    //     <div className={`${style.styledInput} ${style.wide}`}>
    //         <input type="text" name={'name'} required/>
    //         <label>Name</label>
    //     </div>
    //
    //     <div className={style.styledInput}>
    //         <input type="text" name='phone' required/>
    //         <label>Phone Number</label>
    //     </div>
    //     <div className={style.styledInput}>
    //         <input type="text" name='email' required/>
    //         <label>Email</label>
    //     </div>
    //     <div className={`${style.styledInput} ${style.wide}`}>
    //         <textarea required/>
    //         <label>Message</label>
    //     </div>
    //     <div className={style.submitBtn}>Send Message</div>
    // </section>

    const emailIcon = <FontAwesomeIcon className={style.faEnvelope} icon={faEnvelopeSquare} />
    const phoneIcon = <FontAwesomeIcon className={style.faEnvelope} icon={faPhoneSquareAlt} />


    return <section className={style.contactBlock}>
        <h2>Get in <span>Touch</span></h2>

        <div className={style.contactInfo}>
            <div className={style.socialMedia}>
                <h4>Don't be shy ʕ ᵔᴥᵔ ʔ</h4>
                <p>Feel free to get in touch with me. I am always open to discussing new projects, creative ideas or opportunities to be part of your
                    visions.</p>
                <div className={style.emailPhone}>
                     <p className={style.email}>  {emailIcon} Mail Me : @example.com</p>
                </div>
                <div className={style.emailPhone}>
                    <p className={style.phone}> {phoneIcon} Call Me : +375 25 905 14 24</p>
                </div>
                <div className={style.linksMedia}>
                    <a href="#">icons</a>
                </div>
            </div>
            <div className={style.contactsData}>
                <div className={style.nameEmailSubject}>
                    <input type="text" name={'name'}/>
                    <input type="email" name={'email'}/>
                    <input type="text"/>
                </div>
                <div>
                    <textarea/>
                    <button type={"submit"}/>
                </div>
            </div>
        </div>

    </section>
}

export default Contact;