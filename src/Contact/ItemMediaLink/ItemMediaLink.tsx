import style from "./ItemMediaLink.module.scss";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import React from "react";
import {IconDefinition} from "@fortawesome/free-solid-svg-icons";

type ItemMediaLinkPropsType = {
    link: string
    icon: IconDefinition
}
export const ItemMediaLink = (props: ItemMediaLinkPropsType) => {
    return <div className={style.circle}><a href={props.link} target={'_blank'}>
        <FontAwesomeIcon className={style.fabIcons}
                         icon={props.icon}/>
    </a>
    </div>
}