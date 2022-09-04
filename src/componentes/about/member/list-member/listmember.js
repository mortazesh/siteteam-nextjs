import dynamic from 'next/dynamic'
import { Suspense } from 'react'

const Item = dynamic(() => import('./item/item'), {
    suspense: true
})

export default function ListMember() {
    return (
        <section className="w-full h-auto flex justify-center items-center mt-10">
            <div className="w-11/12 h-auto grid grid-cols-4 gap-10">
                <Suspense fallback={<p>load...</p>}>
                    <Item />
                    <Item />
                    <Item />
                    <Item />
                    <Item />
                    <Item />
                    <Item />
                    <Item />
                </Suspense>
            </div>
        </section>
    )
}