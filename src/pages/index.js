import dynamic from 'next/dynamic'
import { Suspense } from 'react'
import Head from 'next/head'

const HeaderHome = dynamic(() => import('../componentes/ui/header/headerhome'), {
  suspense: true
})
const Fotter = dynamic(() => import('../componentes/ui/fotter/footer'), {
  suspense: true
})


export default function Home() {
  return (
    <>
      <Suspense fallback={<p>load...</p>}>
        <Head>
          <title>
            NetElites | نخبگان نت
          </title>
          <meta name="description" content="Free Web tutorials" />
          <meta name="keywords" content="HTML, CSS, JavaScript" />
          <meta name="author" content="morteza shahriari" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        </Head>
        <HeaderHome />
        <Fotter />
      </Suspense>
    </>
  )
}
