import styles from '../../../../../styles/Fotter.module.css'

import dynamic from 'next/dynamic'
import { Suspense } from 'react'

const Menu = dynamic(() => import('./menu/menu'), {
    suspense: true
})
const Context = dynamic(() => import('./contxet/context'), {
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
                        تیم برنامه‌نویسی Net Elites از سال 1400،  با 5  متخصص در زمینه‌ی طراحی و توسعه‌ی وب‌سایت و با شعار رویای شما، توصیه ما فعالیت خود را آغاز کرد.
                        تیم Net Elites متشکل از مرتضی شهریاری، سرپرست تیم و برنامه‌نویس Back-End،فاطمه شهابی طراح UI/UX، دانیال معینی‌تبار و عرفان مهمان‌دوست برنامه‌نویسان‌ Front-End، انیس شیبک برنامه‌نویس Back-End است.
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
                <Suspense fallback={<p>load...</p>}>
                    <Context />
                </Suspense>
            </div>
            <Suspense fallback={<p>load...</p>}>
                <Logo />
            </Suspense>
        </div>
    )
}