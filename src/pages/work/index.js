import dynamic from 'next/dynamic'
import Head from 'next/head'
import { Suspense } from 'react'

const Header = dynamic(() => import('../../componentes/ui/header/header'), {
    suspense: true
})
const ListWork = dynamic(() => import('../../componentes/work/list-work/listwork'), {
    suspense: true
})
const Fotter = dynamic(() => import('../../componentes/ui/fotter/footer'), {
    suspense: true
})

export default function Work() {
    return (
        <>
            <Suspense fallback={<p>load...</p>}>
                <Head>
                    <title>
                        NetElites | نمونه کارها
                    </title>
                    <meta name="description" content="Free Web tutorials" />
                    <meta name="keywords" content="HTML, CSS, JavaScript" />
                    <meta name="author" content="morteza shahriari" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                </Head>
                <Header />
                <ListWork />
                <Fotter />
            </Suspense>
        </>
    )
}