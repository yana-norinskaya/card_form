import {FC} from "react";

import {IDate} from "../../interface/DateForm.interface";

import styles from "./style.module.scss";

import bg_back_card from "../../images/bg-card-back.png";


export const BackCard:FC<IDate> = ({cvc}) => {
    const cvcContent = cvc ? cvc : "000"
    return(
        <div className={styles.back} style={{backgroundImage: `url(${bg_back_card})`}}>
            <span>{cvcContent}</span>
        </div>
    )
}