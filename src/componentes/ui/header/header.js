import styles from '../../../../styles/Header.module.css'

import dynamic from 'next/dynamic'
import { Suspense } from 'react'

const Nav = dynamic(() => import('./nav/nav'), {
    suspense: true
})

export default function Header() {
    return (
        <header className={styles.header}>
            <Suspense fallback={<p>load...</p>}>
                <Nav />
            </Suspense>
        </header>
    )
}