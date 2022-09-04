import dynamic from 'next/dynamic'
import { Suspense } from 'react'

const Header = dynamic(() => import('../../componentes/ui/header/header'), {
    suspense: true
})
const Fotter = dynamic(() => import('../../componentes/ui/fotter/footer'), {
    suspense: true
})

export default function Work() {
    return (
        <>
            <Suspense fallback={<p>load...</p>}>
                <Header />
                <div>
                    <p>
                        work page
                    </p>
                </div>
                <Fotter />
            </Suspense>
        </>
    )
}