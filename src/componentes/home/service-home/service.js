import dynamic from 'next/dynamic'
import { Suspense } from 'react'
import { Fade } from 'react-reveal'

const Text = dynamic(() => import('./text-service-home/text'), {
    suspense: true
})
const Item = dynamic(() => import('./item-service-home/item'), {
    suspense: true
})

import styles from '../../../../styles/Home.module.css'

export default function Service() {
    return (

        // create in object

        <Suspense fallback={<p>load...</p>}>
            <section className={styles.sectionconatiner}>
                <div className={styles.serivcesconatiner}>
                    <Text />
                    <Fade top>
                        <div className={styles.bottomservices}>
                            <Item />
                            <Item />
                            <Item />
                            <Item />
                        </div>
                    </Fade>
                </div>
            </section>
        </Suspense>
    )
}