import dynamic from 'next/dynamic'
import Head from 'next/head'
import { Suspense } from 'react'
import axios from 'axios'

// CREATE LAZY LOAD
import ListArticle from '../../componentes/article/list-article/listarticle'

const Header = dynamic(() => import('../../componentes/ui/header/header'), {
    suspense: true
})
const Fotter = dynamic(() => import('../../componentes/ui/fotter/footer'), {
    suspense: true
})

export default function Articles({ result }) {

    return (
        <>
            <Suspense fallback={<p>load...</p>}>
                <Head>
                    <title>
                        NetElites | مقالات
                    </title>
                    <meta name="description" content="Free Web tutorials" />
                    <meta name="keywords" content="HTML, CSS, JavaScript" />
                    <meta name="author" content="morteza shahriari" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                </Head>
                <Header />
                <ListArticle result={result}/>
                <Fotter />
            </Suspense>
        </>
    )
}

export async function getServerSideProps() {

    const data = await axios.get('https://localhost:44351/api/Article/GetAll')
    const result = await data.json()

    return {
        props: {
            result
        },
    }
}
