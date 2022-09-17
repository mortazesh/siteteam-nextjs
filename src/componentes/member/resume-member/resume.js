import Image from "next/image"

import image from '/public/Images/Group45.png'

import styles from '../../../../styles/Member.module.css'

export default function Resume() {
    return (
        <>
            <div className={styles.boxy1}>
                <div className={styles.title}>
                    <Image src={image} title="آیکون" alt="آیکون" width={100} height={75}/>
                    <h3>تحصیلات</h3>
                </div>
                <div className={styles.text}>
                    <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
                        استفاده از طراحان گرافیک <br /> است، چاپگرها و متون بلکه روزنامه و مجله در
                        ستون و سطرآنچنان که لازم است، <br /> و برای شرایط فعلی تکنولوژی مورد نیاز، و
                    </p>
                </div>
            </div>
            <div className={styles.boxy2}>
                <div className={styles.text}>
                    <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
                        استفاده از طراحان گرافیک <br /> است، چاپگرها و متون بلکه روزنامه و مجله در
                        ستون و سطرآنچنان که لازم است، <br /> و برای شرایط فعلی تکنولوژی مورد نیاز، و
                    </p>
                </div>
                <div className={styles.title}>
                    <h3>روزمه من</h3>
                    <Image src={image} title="آیکون" alt="آیکون" width={100} height={75} className="rotate-180" />
                </div>
            </div>
            <div className={styles.boxy3}>
                <div className={styles.title}>
                    <Image src={image} title="آیکون" alt="آیکون" width={100} height={75}/>
                    <h3>درباره ی من</h3>
                </div>
                <div className={styles.text}>
                    <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
                        استفاده از طراحان گرافیک <br /> است، چاپگرها و متون بلکه روزنامه و مجله در
                        ستون و سطرآنچنان که لازم است، <br /> و برای شرایط فعلی تکنولوژی مورد نیاز، و
                    </p>
                </div>
            </div>
        </>
    )
}