import { useRouter } from "next/router"
import dynamic from 'next/dynamic'
import { Suspense } from 'react'

const Header = dynamic(() => import('../../componentes/ui/header/header'), {
    suspense: true
})
const Fotter = dynamic(() => import('../../componentes/ui/fotter/footer'), {
    suspense: true
})

export default function SingleWork() {

    const route = useRouter()
    const { title } = route.query

    return (
        <>
            <Suspense fallback={<p>load...</p>}>
                <Header />
                <div>
                    <p>
                        single work page in {title}
                    </p>
                </div>
                <Fotter />
            </Suspense>
        </>
    )
}