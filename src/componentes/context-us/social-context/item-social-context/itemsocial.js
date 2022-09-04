import styles from '../../../../../styles/Context.module.css'

export default function ItemSocial({ classes,text }){
    return(
        <div className={styles.itemsocial}>
            <div className={styles.icon}>
                <i className={classes}></i>
            </div>
            <div className={styles.textsocail}>
                <p>
                    {text}
                </p>
            </div>
        </div>
    )
}

                           