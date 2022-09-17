import styles from '../../../../styles/Form.module.css'

export default function Button({ children }){
    return(
        <button type="sumbit" className={styles.button}>
            {children}
        </button>
    )
}