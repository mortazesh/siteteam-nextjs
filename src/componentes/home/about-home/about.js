import dynamic from 'next/dynamic'
import { Suspense } from 'react'

const Text = dynamic(() => import('./text-about-home/text'), {
    suspense: true
})
const Image = dynamic(() => import('./image-about-home/image'), {
    suspense: true
})

import styles from '../../../../styles/Home.module.css'

export default function About() {
    return (
        <Suspense fallback={<p>load...</p>}>
            <section className={styles.sectionconatinerabout}>
                <div className={styles.aboutconatiner}>
                    <Text />
                    <Image />
                </div>
            </section>
        </Suspense>
    )
}