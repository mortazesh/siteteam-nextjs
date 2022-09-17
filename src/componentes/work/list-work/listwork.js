import dynamic from 'next/dynamic'
import { Suspense } from 'react'

const Item = dynamic(() => import('./item-list-work/item'), {
    suspense: true
})
const Text = dynamic(() => import('./text-list-work/text'), {
    suspense: true
})

export default function ListWork() {
    return (
        <Suspense fallback={<p>load..</p>}>
            <div className="w-full h-auto flex justify-center items-start flex-col">
                <Text />
                <Item />
            </div>
        </Suspense>
    )
}