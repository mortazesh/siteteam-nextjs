import Fade from 'react-reveal/Fade';

import styles from '../../../../../styles/Home.module.css'

export default function Text() {
    return (
        <div className={styles.textservice}>
            <Fade right>
                <div className={styles.image}>
                    <img src="" alt="" title="" />
                </div>
                <div className={styles.text}>
                    <h2>
                        خدمات ما
                    </h2>
                </div>
            </Fade>
        </div>
    )
}