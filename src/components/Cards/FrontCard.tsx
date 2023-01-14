import {FC} from "react";

import {IDate} from "../../interface/DateForm.interface";

import styles from "./style.module.scss";

import bg_card_front from "../../images/bg-card-front.png";
import cardLogo from "../../images/card-logo.svg";

export const FrontCard:FC<IDate> = ({name, number, year, month}) => {

    const cardContent = number ? number : "0000 0000 0000 0000";
    const nameContent = name ? name : "Jane Appleseed";
    const monthContent = month ? month : "00";
    const yearContent = year ? year : "00";

    return(
        <div className={styles.front} style={{backgroundImage: `url(${bg_card_front})`}}>
            <img src={cardLogo} alt="cardLogo"/>
            <p className={styles.card_number}>
                {cardContent}
            </p>
            <div className={styles.wrap}>
                <p className={styles.card_name}>
                    {nameContent}
                </p>
                <p>
                    {monthContent} / {yearContent}
                </p>
            </div>
        </div>
    )
}