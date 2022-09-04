import dynamic from 'next/dynamic'
import { Suspense } from 'react'
import Head from 'next/head'

const Header = dynamic(() => import('../../componentes/ui/header/header'), {
    suspense: true
})
const Context = dynamic(() => import('../../componentes/context-us/contextus'), {
    suspense: true
})
const Fotter = dynamic(() => import('../../componentes/ui/fotter/footer'), {
    suspense: true
})

export default function ContextUs() {
    return (
        <>
            <Suspense fallback={<p>load...</p>}>
                <Head>
                    <title>
                        NetElites | تماس با ما
                    </title>
                    <meta name="description" content="Free Web tutorials" />
                    <meta name="keywords" content="HTML, CSS, JavaScript" />
                    <meta name="author" content="morteza shahriari" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                </Head>
                <Header />
                <Context />
                <Fotter />
            </Suspense>
        </>
    )
}