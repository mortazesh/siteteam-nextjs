import styles from '../../../../../styles/Header.module.css'

import dynamic from 'next/dynamic'
import { Suspense } from 'react'

const Logo = dynamic(() => import('./logo/logo'), {
    suspense: true
})
const Search = dynamic(() => import('./search/search'), {
    suspense: true
})
const Menu = dynamic(() => import('./menu/menu'), {
    suspense: true
})

export default function Nav() {
    return (
        <>
            <nav className={styles.nav}>
                <Suspense fallback={<p>load...</p>}>
                    <Logo />
                    <Menu />
                    <Search />
                    <div className={styles.icon}>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </Suspense>
            </nav>
        </>
    )
}