import React from 'react';
import style from './Contact.module.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faEnvelopeSquare, faPhoneSquareAlt} from '@fortawesome/free-solid-svg-icons'
import {faGithub, faLinkedin, faTelegram, faVk} from "@fortawesome/free-brands-svg-icons";

const Contact = () => {
    return <section className={style.contactBlock}>
        <h2>Get in <span>Touch</span></h2>

        <div className={style.contactInfo}>
            <div className={style.socialMedia}>
                <h4>Don't be shy ʕ ᵔᴥᵔ ʔ</h4>
                <p>Feel free to get in touch with me. I am always open to discussing new projects, creative ideas or opportunities to be part of your
                    visions.</p>
                <div className={style.emailPhone}>
                    <p className={style.email}><FontAwesomeIcon className={style.faEnvelope} icon={faEnvelopeSquare}/>Mail Me : @example.com</p>
                </div>
                <div className={style.emailPhone}>
                    <p className={style.phone}><FontAwesomeIcon className={style.faEnvelope} icon={faPhoneSquareAlt}/> Call Me : +375 25 905 14 24</p>
                </div>
                <div className={style.linksMedia}>
                    <div className={style.circle}><a href="https://github.com/FilimonovKostya" target={'_blank'}>
                        <FontAwesomeIcon className={style.fabIcons}
                                         icon={faGithub}/>
                    </a>
                    </div>
                    <div className={style.circle}><a href="https://t.me/FilimonovKostya" target={'_blank'}>
                        <FontAwesomeIcon className={style.fabIcons}
                                         icon={faTelegram}/>
                    </a>
                    </div>
                    <div className={style.circle}><a href="https://vk.com/id97510491" target={'_blank'}>
                        <FontAwesomeIcon className={style.fabIcons}
                                         icon={faVk}/>
                    </a>
                    </div>
                    <div className={style.circle}><a
                        href="https://www.linkedin.com/in/%D0%BA%D0%BE%D1%81%D1%82%D1%8F-%D1%84%D0%B8%D0%BB%D0%B8%D0%BC%D0%BE%D0%BD%D0%BE%D0%B2-7b3378201/"
                        target={'_blank'}>
                        <FontAwesomeIcon className={style.fabIcons}
                                         icon={faLinkedin}/>
                    </a>
                    </div>
                </div>
            </div>
            <div className={style.contactsData}>
                <div className={style.nameEmailSubject}>
                    <input type="text" name={'name'} placeholder={'Your name'}/>
                    <input type="email" name={'email'} placeholder={'Your email'}/>
                    <input type="text" placeholder={'Your subject'}/>
                </div>
                <div className={style.textarea}>
                    <textarea  placeholder={'Your message'}/>
                    <button type={"submit"} className={style.btn}> Send Message</button>
                </div>
            </div>
        </div>

    </section>
}

export default Contact;