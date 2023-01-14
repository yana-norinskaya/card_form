import {FC} from "react";

import styles from "./style.module.scss";

interface IButton{
    title: string,
    onClick?: () => void
}

export const Button:FC<IButton> = ({title, onClick}) => {
    return(
        <button className={styles.btn} onClick={onClick}>{title}</button>
    )
}