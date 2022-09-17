import Image from "next/image"

import image from '/public/Images/Group45.png'

export default function Body() {
    return (
        <>
            <section className="w-full h-64 flex justify-center items-center mt-5">
                <div className="w-11/12 h-64 flex justify-center items-center">
                    <div className="w-2/3 h-56 flex justify-center items-center border-2 border-gray-500 border-solid rounded-md">
                        <p className="w-11/12 leading-8">
                            تیم برنامه‌نویسی Net Elites از سال 1400،  با 5  متخصص در زمینه‌ی طراحی و توسعه‌ی وب‌سایت و با شعار "رویای شما، توصیه ما" فعالیت خود را آغاز کرد.
                        </p>
                    </div>
                    <div className="w-1/3 h-128 flex justify-center items-center">
                        <Image src={image} title="آیکون" alt="آیکون" width={100} height={75} className="rotate-180"/>
                    </div>
                </div>
            </section>
            <section className="w-full h-64 flex justify-center items-center mt-5">
                <div className="w-11/12 h-64 flex justify-center items-center">
                    <div className="w-1/3 h-56 flex justify-center items-center">
                        <Image src={image} title="آیکون" alt="آیکون" width={100} height={75}/>
                    </div>
                    <div className="w-2/3 h-56 flex justify-center items-center border-2 border-gray-500 border-solid rounded-md">
                        <p className="w-11/12 leading-8">
                            تیم Net Elites متشکل از مرتضی شهریاری، سرپرست تیم و برنامه‌نویس Back-End با زبان C#، فاطمه شهابی طراح UI/UX، دانیال معینی‌تبار و عرفان مهمان‌دوست برنامه‌نویسان‌ Front-End، انیس شیبک برنامه‌نویس Back-End با زبان PHP و فریم‌ورک Laravel است
                        </p>ّ
                    </div>
                </div>
            </section>
        </>
    )
}