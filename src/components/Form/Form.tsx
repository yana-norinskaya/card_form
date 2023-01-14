import {FC} from "react";
import {useForm} from "react-hook-form";

import {Title, Button} from "../../components";
import {transformDate} from "./transformDate";
import {IDate, IForm} from "../../interface";

import styles from "./style.module.scss";

import {cardCvc, cardDate, cardName, cardNumber, errorMessage, registerName} from "../../Data/DateForm";

export const Form: FC<IForm> = ({setName, setNumber, setCvcName, setYear, setMonth, setSuccess}) => {

    const {register, handleSubmit, reset, formState: {errors}} = useForm<IDate>();

    const onSubmit = handleSubmit(data => {
        console.log(data)
        reset();
        setName("")
        setNumber("")
        setCvcName("")
        setYear("")
        setMonth("")
        setSuccess(true)
    });

    return(
        <form className={styles.form} onSubmit={(onSubmit)}>

            <Title title={cardName.title} />
            <input
                   className={styles.box}
                   type={cardName.type}
                   placeholder={cardName.placeholder}
                   {...register(registerName.name, {
                       required: errorMessage.required,
                       maxLength: {
                           value: 22,
                           message: errorMessage.length[3]
                       },
                       pattern: {
                           value: /^[A-Za-z][A-Za-z-\s]+$/,
                           message: errorMessage.patternStr
                   }
                   })}
                   onChange={(e) => setName(e.target.value.toUpperCase()) }
            />
            {errors.name && <div className={styles.error}>{errors.name.message}</div>}

            <Title title={cardNumber.title} />
            <input className={styles.box}
                   type={cardNumber.type}
                   placeholder={cardNumber.placeholder}
                   maxLength={16}
                   {...register(registerName.number, {
                       required: errorMessage.required,
                       pattern: {
                       value: /^[0-9]+$/,
                       message: errorMessage.patternNum
                   },
                       minLength: {
                           value: 16,
                           message: errorMessage.length[2]
                       }
                   })}
                   onChange={(e) => setNumber(transformDate(e.target.value))}
            />
            {errors.number && <div className={styles.error}>{errors.number.message}</div>}

            <div className={styles.wrap}>
                <div>
                    <Title title={cardDate.title}/>
                    <div className={styles.flex}>
                        <input className={styles.box}
                               type={cardDate.type}
                               placeholder={cardDate.placeholder[0]}
                               maxLength={2}
                               {...register(registerName.MM,{
                                   required: errorMessage.required,
                                   pattern: {
                                       value: /^[0-9]+$/,
                                       message: errorMessage.patternNum
                                   },
                                   minLength: {
                                       value: 2,
                                       message: errorMessage.length[0]
                                   }
                               })}
                               onChange={(e) => setMonth(e.target.value) }
                        />
                        <input className={styles.box}
                               type={cardDate.type}
                               placeholder={cardDate.placeholder[1]}
                               maxLength={2}
                               {...register(registerName.YY, {
                                   required: errorMessage.required,
                                   pattern: {
                                       value: /^[0-9]+$/,
                                       message: errorMessage.patternNum
                                   },
                                   minLength: {
                                       value: 2,
                                       message: errorMessage.length[0]
                                   }
                               })}
                               onChange={(e) => setYear(e.target.value) }
                        />
                    </div>
                    {errors.month && <div className={styles.error}>{errors.month.message}</div>}
                    {errors.year && <div className={styles.error}>{errors.year.message}</div>}
                </div>

                <div>
                    <Title title={cardCvc.title}/>
                    <input className={styles.box}
                           type={cardCvc.type}
                           placeholder={cardCvc.placeholder}
                           maxLength={3}
                           {...register(registerName.CVC, {
                               required: errorMessage.required,
                               pattern: {
                                   value: /^[0-9]+$/,
                                   message: errorMessage.patternNum
                               },
                               minLength: {
                                   value: 3,
                                   message: errorMessage.length[1]
                               }
                           })}
                           onChange={(e) => setCvcName(e.target.value) }
                    />
                    {errors.cvc && <div className={styles.error}>{errors.cvc.message}</div>}
                </div>
            </div>

            <Button title="Confirm"/>
        </form>
    )
}