import styles from '../Expense.module.css';

export function Input({label,inputConfig,invalid}){

    return(
        <div className={styles.inputField}>
        <label>{label}</label>
        <input className={`${invalid && styles.invalid}`} {...inputConfig}/>
        </div>
    )
}

export function MultilineInput({multilineInputConfig,label,invalid}){

    return(
        <div className={styles.inputField}>
        <label>{label}</label>
        <textarea className={`${invalid && styles.invalid}`} {...multilineInputConfig} />
        </div>
    )
}

