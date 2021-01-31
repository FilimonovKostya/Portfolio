import style from "./ContactForm.module.scss";
import React, {FormEvent, useState} from "react";
import {Roll} from "react-awesome-reveal";
import emailjs from 'emailjs-com';


type ContactFormPropsType = {
    width: number
}

export const ContactForm = (props: ContactFormPropsType) => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [message, setMessage] = useState('')

    function sendEmail(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();

        emailjs.send("service_9pdnr7h", "template_4kwchyp", {
            name: name,
            email: email,
            phone: phone,
            message: message,

        },'user_U70qJk2kdzUZ1Ob7vOBtZ')
            .then(res => {
                console.log('Отправил данные')
            })
            .catch(() => {
                console.log('huiat')
            })
        ;
    }


    return props.width > 1000
        ? <Roll duration={1300}>
            <div className={style.contactsData}>
                <form onSubmit={sendEmail}>
                    <div className={style.nameEmailSubject}>
                        <input type="text" name={'name'} placeholder={'Your name'} value={name} onChange={event => setName(event.currentTarget.value)}/>
                        <input type="email" name={'email'} placeholder={'Your email'} value={email}
                               onChange={event => setEmail(event.currentTarget.value)}/>
                        <input type="text" name={'phone'} placeholder={'Phone Number'} value={phone}
                               onChange={event => setPhone(event.currentTarget.value)}/>
                    </div>
                    <div className={style.textarea}>
                        <textarea placeholder={'Your message'} name={'message'} value={message} onChange={event => setMessage(event.currentTarget.value)}/>
                        <button type={"submit"} className={style.btn}> Send Message</button>
                    </div>
                </form>
            </div>
        </Roll>

        : <div className={style.contactsData}>
            <form onSubmit={sendEmail}>
                <div className={style.nameEmailSubject}>
                    <input type="text" name={'name'} placeholder={'Your name'} value={name} onChange={event => setName(event.currentTarget.value)}/>
                    <input type="email" name={'email'} placeholder={'Your email'} value={email} onChange={event => setEmail(event.currentTarget.value)}/>
                    <input type="text" name={'phone'} placeholder={'Phone Number'} value={phone}
                           onChange={event => setPhone(event.currentTarget.value)}/>
                </div>
                <div className={style.textarea}>
                    <textarea placeholder={'Your message'} name={'message'} value={message} onChange={event => setMessage(event.currentTarget.value)}/>
                    <button type={"submit"} className={style.btn}> Send Message</button>
                </div>
            </form>
        </div>
}