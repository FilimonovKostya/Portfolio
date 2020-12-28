import {IconDefinition} from "@fortawesome/fontawesome-common-types";
import style from "./ContactData.module.scss";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import React from "react";

type ContactsDataPropsType = {
    icon: IconDefinition
    text: string
}
export const ContactsData = (props: ContactsDataPropsType) => {
    return <div className={style.emailPhone}>
        <p className={style.email}><FontAwesomeIcon className={style.faEnvelope} icon={props.icon}/> {props.text} </p>
    </div>
}