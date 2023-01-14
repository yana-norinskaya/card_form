import {Dispatch, FC} from "react";

import {Button} from "../UI/Button";

import styles from "./style.module.scss";

import complete from "../../images/icon-complete.svg";

export const Success: FC<{setSuccess: Dispatch<boolean>}> = ({setSuccess}) => {
    return(
        <div className={styles.wrap}>
            <img src={complete} alt="complete"/>
            <h1>Thank you!</h1>
            <p>We've added your card details</p>
            <Button title="Continue" onClick={() => setSuccess(false)}/>
        </div>
    )
}