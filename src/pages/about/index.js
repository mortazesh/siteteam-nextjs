import dynamic from 'next/dynamic'
import Head from 'next/head'
import { Suspense } from 'react'

const Header = dynamic(() => import('../../componentes/ui/header/header'), {
    suspense: true
})
const Fotter = dynamic(() => import('../../componentes/ui/fotter/footer'), {
    suspense: true
})
const AboutTeam = dynamic(() => import('../../componentes/about/about'), {
    suspense: true
})

export default function About() {
    return (
        <>
            <Suspense fallback={<p>load...</p>}>
                <Head>
                    <title>
                        NetElites | درباره ی ما
                    </title>
                    <meta name="description" content="تیم برنامه‌نویسی Net Elites از سال 1400،  با 5  متخصص در زمینه‌ی طراحی و توسعه‌ی وب‌سایت و با شعار رویای شما، توصیه ما فعالیت خود را آغاز کرد." />
                    <meta name="keywords" content="Net Elites,برنامه نویسی, تیم برنامه نویسی,طراحی سایت,سئو" />
                    <meta name="author" content="morteza shahriari" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                </Head>
                <Header />
                <AboutTeam />
                <Fotter />
            </Suspense>
        </>
    )
}