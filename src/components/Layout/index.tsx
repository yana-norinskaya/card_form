import {FC, ReactNode} from "react";

import styles from "./style.module.scss";

import bgDesktop from "../../images/bg-main-desktop.png";
import bgMobile from "../../images/bg-main-mobile.png";

interface ILayout{
    children: ReactNode
}

export const Layout: FC<ILayout> = ({children}) => {
    return(
        <div className={styles.wrap}>
            <img className={styles.desktop} src={bgDesktop} alt="bgDesktop"/>
            <img className={styles.mobile} src={bgMobile} alt="bgMobile"/>
            {children}
        </div>
    )
}