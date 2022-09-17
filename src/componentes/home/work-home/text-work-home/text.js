import { Fade } from 'react-reveal'

import styles from '../../../../../styles/Home.moduel.css'

export default function Text() {
    return (
        <div>
            <div className={styles.topwork}>
                <Fade right>
                    <div className={styles.image}>
                        <img src="" alt="" title="" />
                    </div>
                    <div className={styles.text}>
                        <h2>
                            نمونه کارهای اجرایی
                        </h2>
                    </div>
                </Fade>
            </div>
        </div>
    )
}