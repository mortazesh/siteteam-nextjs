import dynamic from 'next/dynamic'
import { Suspense } from 'react'

const Text = dynamic(() => import('./text/text'), {
    suspense: true
})
const Body = dynamic(() => import('./body/body'), {
    suspense: true
})
const MemberAbout = dynamic(() => import('./member/memberabout'), {
    suspense: true
})

export default function AboutTeam() {
    return (
        <>
            <Suspense fallback={<p>load...</p>}>
                <Text />
                <Body />
                <MemberAbout />
            </Suspense>
        </>
    )
}