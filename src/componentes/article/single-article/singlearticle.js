import dynamic from 'next/dynamic'
import { Suspense } from 'react'

const Text = dynamic(() => import('./text_article/text'), {
    suspense: true
})
const Box = dynamic(() => import('./box_article/box'), {
    suspense: true
})

export default function SingleArticleTemplet() {
    return (
        <Suspense fallback={<p>load...</p>}>
            <Text />
            <Box />
        </Suspense>
    )
}