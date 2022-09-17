import dynamic from 'next/dynamic'
import { Suspense } from 'react'

import styles from '../../../../styles/Article.module.css'

const Item = dynamic(() => import('./item-list-article/item'), {
    suspense: true
})
const Text = dynamic(() => import('./text-list-article/text'), {
    suspense: true
})

export default function ListArticle({ result }) {

    return (
        <Suspense fallback={<p>load...</p>}>
            <Text />
            <div className={styles.imggallery}>
                {
                    result?.map((result) => {
                        <Item key={result.id} result={result}/>
                    }) 
                }
            </div>
        </Suspense>
    )
}