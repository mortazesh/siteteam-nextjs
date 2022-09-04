import styles from '../../../../../../styles/Header.module.css'

import dynamic from 'next/dynamic'
import { Suspense } from 'react'

const MenuItem = dynamic(() => import('./menuitesm/menuitesm'), {
    suspense: true
})

export default function Menu() {
    return (
        <ul className={styles.menu}>
            <Suspense fallback={<p>load...</p>}>
                <MenuItem address='/'>
                    صفحه اصلی
                </MenuItem>
                <MenuItem address='/article'>
                    مقالات
                </MenuItem>
                <MenuItem address='/work'>
                    نمونه کارها
                </MenuItem>
                <MenuItem address='/about'>
                    درباره ی ما
                </MenuItem>
                <MenuItem address='/context-us'>
                    تماس با ما
                </MenuItem>
                <MenuItem address='/counseling'>
                    مشاوره
                </MenuItem>
            </Suspense>
        </ul>
    )
}