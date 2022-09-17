import dynamic from 'next/dynamic'
import { Suspense } from 'react'

const Text = dynamic(() => import('./text-single-work/text'), {
    suspense: true
})
const Image = dynamic(() => import('./image-single-work/image'), {
    suspense: true
})
const Language = dynamic(() => import('./language-single-work/language'), {
    suspense: true
})
const Description = dynamic(() => import('./description-single-work/description'), {
    suspense: true
})


export default function SingleWorkTemplate() {
    return (
        <Suspense fallback={<p>load...</p>}>
            <Text />
            <Image />
            <Description />
            <Language />
        </Suspense>
    )
}