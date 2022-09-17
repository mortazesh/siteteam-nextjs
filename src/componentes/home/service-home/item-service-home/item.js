import dynamic from 'next/dynamic'
import { Suspense } from 'react'

const Text = dynamic(() => import('./text-item-service-home/text'), {
    suspense: true
})

const Image = dynamic(() => import('./image-item-service-home/image'), {
    suspense: true
})


export default function Item() {
    return (
        <Suspense fallback={<p>load...</p>}>
            <div>
                <Image />
                <Text />
            </div>
        </Suspense>
    )
}