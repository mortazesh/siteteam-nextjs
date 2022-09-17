import dynamic from 'next/dynamic'
import { Suspense } from 'react'

const Gray = dynamic(() => import('./Item-gray/gray'), {
    suspense: true
})
const White = dynamic(() => import('./item-white/white'), {
    suspense: true
})


export default function Item() {
    return (
        <>
            <Suspense fallback={<p>load...</p>}> 
                <White />
                <Gray />
                <White />
                <Gray />
                <White />
                <Gray />
                <White />
            </Suspense>
        </>
    )
}