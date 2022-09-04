import styles from '../../../../styles/Header.module.css'

import dynamic from 'next/dynamic'
import { Suspense } from 'react'
import Typical from 'react-typical'

const Nav = dynamic(() => import('./nav/nav'), {
    suspense: true
})

export default function HeaderHome() {
    return (
        <header className={styles.headerhome}>
            <Suspense fallback={<p>load...</p>}>
                <Nav />
            </Suspense>
            <div className={styles.bootomheader}>
                <div className={styles.boxtext}>
                    <h2>
                        معرفی تیم Net Elites
                    </h2>
                    <Typical
                        steps={['لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.', 10000]}
                        loop={Infinity}
                        wrapper="p"
                    />
                </div>
            </div>
        </header>
    )
}