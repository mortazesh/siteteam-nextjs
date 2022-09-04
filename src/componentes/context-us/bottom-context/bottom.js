import styles from '../../../../styles/Context.module.css'

import dynamic from 'next/dynamic'
import { Suspense } from 'react'

const Image = dynamic(() => import('./image-bottom-context/image'), {
    suspense: true
})

export default function Bottom() {
    return (
        <section className={styles.mainconatiner}>
            <div className={styles.mainsection}>
                <Suspense fallback={<p>load...</p>}>
                    <Image />
                </Suspense>
            </div>
        </section>
    )
}