import dynamic from 'next/dynamic'
import { Suspense } from 'react'

const Text = dynamic(() => import('./text-counseling/text'), {
    suspense: true
})
const Body = dynamic(() => import('./body-counseling/body'), {
    suspense: true
})
const Form = dynamic(() => import('./form-counseling/form'), {
    suspense: true
})


export default function Counselings() {
    return (
        <>
            <Suspense fallback={<p>load...</p>}>
                <Text />
                <Body />
                <Form />
            </Suspense>
        </>
    )
}