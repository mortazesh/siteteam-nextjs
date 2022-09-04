import dynamic from 'next/dynamic'
import { Suspense } from 'react'

const Text = dynamic(() => import('./text-form-counseling/text'), {
    suspense: true
})


export default function Form() {
    return (
        <section className="w-full h-auto flex justify-center items-center">
            <div className="w-full h-auto flex justify-center items-center flex-col">
                <Suspense fallback={<p>load...</p>}>
                    <Text/>
                    <form className="w-2/4 h-auto flex justify-center flex-col items-center mt-5">

                    </form>
                </Suspense>
            </div>
        </section>
    )
}