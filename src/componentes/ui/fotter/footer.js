import styles from '../../../../styles/Fotter.module.css'

import dynamic from 'next/dynamic'
import { Suspense } from 'react'

const TopFotter = dynamic(() => import('./topfooter/topfotter'), {
    suspense: true
})

export default function Fotter() {
    return (
        <footer className={styles.footerconatiner}>
            <Suspense fallback={<p>load...</p>}>
                <TopFotter />
            </Suspense>
        </footer>
    )
}