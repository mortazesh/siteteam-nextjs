import styles from '../../../../styles/Context.module.css'

import dynamic from 'next/dynamic'
import { Suspense } from 'react'

const ItemSocial = dynamic(() => import('./item-social-context/itemsocial'), {
    suspense: true
})

export default function Social() {
    return (
        <div className={styles.sociallinks}>
            <Suspense fallback={<p>load...</p>}>
                <ItemSocial classes='fab fa-telegram-plane' text='telegram'/>
                <ItemSocial classes='fab fa-whatsapp' text='whatsapp'/>
                <ItemSocial classes='fab fa-instagram' text='instagram'/>
            </Suspense>
        </div>
    )
}