import dynamic from 'next/dynamic'
import { Suspense } from 'react'

const Text = dynamic(() => import('./text/text'), {
    suspense: true
})
const ListMember = dynamic(() => import('./list-member/listmember'), {
    suspense: true
})


export default function MemberAbout() {
    return (
        <>
            <Suspense fallback={<p>load...</p>}>
                <Text />
                <ListMember />
            </Suspense>
        </>
    )
}