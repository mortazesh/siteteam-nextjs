import { useRouter } from "next/router"
import Head from "next/head"
import dynamic from 'next/dynamic'
import { Suspense } from 'react'

const Header = dynamic(() => import('../../componentes/ui/header/header'), {
    suspense: true
})
const SingleWorkTemplate = dynamic(() => import('../../componentes/work/single-work/singlework'), {
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
                <Head>
                    <title>
                        NetElites | {title}
                    </title>
                    <meta name="description" content="Free Web tutorials" />
                    <meta name="keywords" content="HTML, CSS, JavaScript" />
                    <meta name="author" content="morteza shahriari" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                </Head>ّ
                <Header />
                <SingleWorkTemplate />
                <Fotter />
            </Suspense>
        </>
    )
}