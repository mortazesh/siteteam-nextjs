import dynamic from 'next/dynamic'
import { Suspense } from 'react'

const About = dynamic(() => import('./about-home/about'), {
    suspense: true
})
const Service = dynamic(() => import('./service-home/service'), {
    suspense: true
})


export default function HomeTemplet() {
    return (
        <Suspense fallback={<p>load...</p>}>
            <Service />
            <About />
        </Suspense>
    )
}