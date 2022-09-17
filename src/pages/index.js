import dynamic from 'next/dynamic'
import { Suspense } from 'react'
import Head from 'next/head'

const HeaderHome = dynamic(() => import('../componentes/ui/header/headerhome'), {
  suspense: true
})
const HomeTemplet = dynamic(() => import('../componentes/home/home'), {
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
          <meta name="description" content="تیم برنامه‌نویسی Net Elites در عرصه‌ طراحی وب‌سایت، سئو و بهینه‌سازی، آموزش برنامه‌نویسی و سایر خدمات حوزه‌ی نرم‌افزار، با بهره‌گیری از جدیدترین استانداردها و متدها و در کمترین زمان با حداقل هزینه فعالیت می‌کند." />
          <meta name="keywords" content="Net Elites,برنامه نویسی, تیم برنامه نویسی,طراحی سایت,سئو" />
          <meta name="author" content="morteza shahriari" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        </Head>
        <HeaderHome />
        <HomeTemplet />
        <Fotter />
      </Suspense>
    </>
  )
}
