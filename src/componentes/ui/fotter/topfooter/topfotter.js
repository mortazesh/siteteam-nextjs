import styles from '../../../../../styles/Fotter.module.css'

import dynamic from 'next/dynamic'
import { Suspense } from 'react'

const Menu = dynamic(() => import('./menu/menu'), {
    suspense: true
})
const Logo = dynamic(() => import('./logo/logo'), {
    suspense: true
})

export default function TopFotter() {
    return (
        <div className={styles.topfooter}>
            <div className={styles.menufooter}>
                <div className={styles.titlefooter}>
                    <h3>
                        درباره ی ما
                    </h3>
                </div>
                <div className={styles.desabout}>
                    <p>
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
                        استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
                        ستون و سطرآنچنان که لازم است،
                    </p>
                </div>
            </div>
            <div className={styles.menufooter}>
                <div className={styles.titlefooter}>
                    <h3>
                        دسترسی آسان
                    </h3>
                </div>
                <Suspense fallback={<p>load...</p>}>
                    <Menu />
                </Suspense>
            </div>
            <div className={styles.menufooter}>
                <div className={styles.titlefooter}>
                    <h3>
                        راه های ارتباطی با ما
                    </h3>
                </div>
            </div>
            <Suspense fallback={<p>load...</p>}>
                <Logo />
            </Suspense>
        </div>
    )
}