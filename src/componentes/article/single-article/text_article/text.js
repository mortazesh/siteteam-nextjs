import styles from '../../../../../styles/Article.module.css'

export default function Text() {
    return (
        <div className={styles.them}>
            <div className={styles.head}>
                <h1>تایپوگرافی در طراحی سایت</h1>
            </div>
            <div className={styles.title}>
                <li>
                    نویسنده : مرتضی شهریاری
                </li>
                <li> 
                    تاریخ انتشار : 00:00
                </li>
                <li> 
                    سطح : آسون
                </li>
            </div>
        </div>
    )
}