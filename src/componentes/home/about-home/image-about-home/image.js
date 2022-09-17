import { Fade } from 'react-reveal'

import styles from '../../../../../styles/Home.module.css'

export default function Image() {
    return (
        <Fade left>
            <div className={styles.imageleft}>
                <img src="" title="" alt="" loading="lazy" />
            </div>
        </Fade>
    )
}