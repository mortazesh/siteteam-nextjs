import styles from '../../../../../../styles/Fotter.module.css'

import dynamic from 'next/dynamic'
import { Suspense } from 'react'

const MenuItem = dynamic(() => import('./menuitem/menuitem'), {
    suspense: true
})

export default function Menu() {
    return (
        <ul className={styles.menulistfooter}>
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
                <MenuItem address='/'>
                    مشاوره
                </MenuItem>
            </Suspense>
        </ul>
    )
}