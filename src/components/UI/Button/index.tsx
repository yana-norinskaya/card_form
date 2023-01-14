import {FC} from "react";
import styles from "./styles.module.scss";

interface IButton{
    title: string,
}

export const Button:FC<IButton> = ({title}) => {
    return(
        <button className={styles.btn}>{title}</button>
    )
}