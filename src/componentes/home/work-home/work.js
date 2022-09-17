import dynamic from 'next/dynamic'
import { Suspense } from 'react'
import { Fade } from 'react-reveal'

const Text = dynamic(() => import('./text-work-home/text'), {
    suspense: true
})

import styles from '../../../../styles/Home.moduel.css'

export default function Work() {
    return (
        <Suspense fallback={<p>load...</p>}>
            <section className={styles.sectionconatinerwork}>
                <div className={styles.workconatiner}>
                    <Text />
                    <div className={styles.bottomwork}>
                        <Fade top>
                            <div className={styles.top}>

                            </div>
                        </Fade>
                        
                    </div>
                </div>
            </section>
        </Suspense>
    )
}