import {FC} from "react";

import styles from "./style.module.scss";

interface IFormTitle{
    title: string,
}

export const Title:FC<IFormTitle> = ({title}) => {
    return(
        <p className={styles.name}>{title}</p>
    )
}