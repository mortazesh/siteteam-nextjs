import { useRouter } from "next/router"
import Head from "next/head"
import dynamic from 'next/dynamic'
import { Suspense } from 'react'

const Header = dynamic(() => import('../../componentes/ui/header/header'), {
    suspense: true
})
const MemberTemplet = dynamic(() => import('../../componentes/member/member'), {
    suspense: true
})
const Fotter = dynamic(() => import('../../componentes/ui/fotter/footer'), {
    suspense: true
})

export default function Member() {

    const route = useRouter()
    const { title } = route.query

    return (
        <>
            <Suspense fallback={<p>load...</p>}>
                <Head>
                    <title>
                        NetElites | {title}
                    </title>
                    <meta name="description" content="Free Web tutorials" />
                    <meta name="keywords" content="HTML, CSS, JavaScript" />
                    <meta name="author" content="morteza shahriari" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                </Head>
                <Header />
                <MemberTemplet />
                <Fotter />
            </Suspense>
        </>
    )
}