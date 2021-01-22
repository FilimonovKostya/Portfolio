import React from 'react';
import style from './Contact.module.scss'
import {faEnvelopeSquare, faPhoneSquareAlt} from '@fortawesome/free-solid-svg-icons'
import {faGithub, faLinkedin, faTelegram, faVk} from "@fortawesome/free-brands-svg-icons";
import {ItemMediaLink} from "./ItemMediaLink/ItemMediaLink";
import {ContactForm} from "./ContactForm/ContactForm";
import {ContactsData} from "./ContactsData/ContactsData";
import {Roll} from "react-awesome-reveal";

type ContactPropsType = {
    width: number
}

const Contact = (props: ContactPropsType) => {
    return <section className={style.contactBlock}>
        <h2>Get in <span>Touch</span></h2>
        <div className={style.contactInfo}>
            <div className={style.socialMedia}>
                {props.width > 1000
                    ? <Roll duration={1300}>
                        <h4>Don't be shy ʕ ᵔᴥᵔ ʔ</h4>
                        <p>Feel free to get in touch with me. I am always open to discussing new projects, creative ideas or opportunities to be part of your
                            visions.</p>
                        <ContactsData text={'Mail Me : konstantinfilimonou@gmail.com'} icon={faEnvelopeSquare}/>
                        <ContactsData text={'Call Me : +375 25 905 14 24'} icon={faPhoneSquareAlt}/>
                        <div className={style.linksMedia}>
                            <ItemMediaLink icon={faGithub} link={'https://github.com/FilimonovKostya'}/>
                            <ItemMediaLink icon={faTelegram} link={'https://t.me/FilimonovKostya'}/>
                            <ItemMediaLink icon={faVk} link={'https://vk.com/id97510491'}/>
                            <ItemMediaLink icon={faLinkedin} link={'https://www.linkedin.com/in/filimonovkostya/'}/>

                        </div>
                    </Roll>
                    : <>
                        <h4>Don't be shy ʕ ᵔᴥᵔ ʔ</h4>
                        <p>Feel free to get in touch with me. I am always open to discussing new projects, creative ideas or opportunities to be part of your
                            visions.</p>
                        <ContactsData text={'Mail Me : konstantinfilimonou@gmail.com'} icon={faEnvelopeSquare}/>
                        <ContactsData text={'Call Me : +375 25 905 14 24'} icon={faPhoneSquareAlt}/>
                        <div className={style.linksMedia}>
                            <ItemMediaLink icon={faGithub} link={'https://github.com/FilimonovKostya'}/>
                            <ItemMediaLink icon={faTelegram} link={'https://t.me/FilimonovKostya'}/>
                            <ItemMediaLink icon={faVk} link={'https://vk.com/id97510491'}/>
                            <ItemMediaLink icon={faLinkedin} link={'https://www.linkedin.com/in/filimonovkostya/'}/>

                        </div>
                    </>
                }
            </div>

            <ContactForm width={props.width}/>
        </div>
    </section>
}

export default Contact;