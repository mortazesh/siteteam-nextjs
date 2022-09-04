import dynamic from 'next/dynamic'
import { Suspense } from 'react'

const Text = dynamic(() => import('./text-context/text'), {
    suspense: true
})
const Social = dynamic(() => import('./social-context/social'), {
    suspense: true
})
const Bottom = dynamic(() => import('./bottom-context/bottom'), {
    suspense: true
})


export default function Context() {
    return (
        <>
            <Suspense fallback={<p>load...</p>}>
                <Text />
                <Social />
                <Bottom/>
            </Suspense>
        </>
    )
}