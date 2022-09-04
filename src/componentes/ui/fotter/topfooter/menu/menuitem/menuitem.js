import styles from '../../../../../../../styles/Fotter.module.css'

import dynamic from 'next/dynamic'
import { Suspense } from 'react'

const Item = dynamic(() => import('./item/item'), {
    suspense: true
})

export default function MenuItem({ address, children }) {
    return (
        <li className={styles.menuitemfooter}>
            <Suspense fallback={<p>load...</p>}>
                <Item address={address}>
                    {children}
                </Item>
            </Suspense>
        </li>
    )
}