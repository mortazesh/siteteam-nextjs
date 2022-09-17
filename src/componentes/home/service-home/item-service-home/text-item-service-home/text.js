import styles from '../../../../../../styles/Home.module.css'

export default function Text({ children }){
    return(
        <div className={styles.txetservices}>
            <p>
                {children}
            </p>
        </div>
    )
}