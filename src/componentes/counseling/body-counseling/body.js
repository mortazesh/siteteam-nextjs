import Image from "next/image"

import imagecounseling1 from '/public/Images/counseling.jpeg'

export default function Body() {
    return (
        <>
            <section className="flex justify-center items-center md:w-full h-96 mt-12">
                <div className="h-150 flex justify-center items-center flex-col sm:flex-row md:w-10/12 lg:flex-row">
                    <div className="md:w-1/2 h-150 flex justify-end items-center">
                        <p className="md:text-justify leading-7">
                            مشاوره آنلاین طراحی سایت برای افرادی که سایت ندارند.
                            چه هاست و دامنه ای بخرم؟
                            چطور مجوز های رسمی مثل اینماد بگیرم؟
                            چه ui / ux ای مناسب حوزه کاری منه؟
                            چیکار کنم تا بتونم با بهترین های حوزه خودم رقابت کنم؟
                            اصول برندینگ رو چجوری باید در سایتم پیاده کنم تا فروش خوبی داشته باشم؟
                            چطور برای خودم بیزینس پلن یا بوم کسب و کار رسم کنم؟
                            سایتم رو چطور طراحی کنم تا بازدیدکنندگان به من اعتماد کنند؟
                            هزینه راه اندازی وب سایت مدنظرم چقدر میشه؟
                            روند انجام پروژه طراحی سایت به چه شکله؟
                            پیشنهاد شما جهت طراحی لوگو برای برند ما چیه؟ (تعرفه طراحی لوگو)
                            کجا میتونم نمونه کارهای طراحی سایت ریسپانسیو رو مشاهده کنم؟ (نمونه کارهای طراحی سایت)
                        </p>
                    </div>
                    <div className="md:w-1/2 h-150 flex justify-end items-center rounded-md">
                        <Image src={imagecounseling1} title="عکس مشاوره netelites" alt="عکس مشاوره netelites" className="md:w-11/12 h-96 rounded-md" width={525} height={450}/>
                    </div>
                </div>
            </section>
            <section className="md:w-full h-128 flex justify-center items-center bg-gray-300 mt-12">
                <div className="md:w-10/12 h-96 flex justify-center items-center">
                    <div className="md:w-1/2 h-96 flex justify-end items-center ml-10 rounded-md">
                        <Image src={imagecounseling1} title="عکس مشاوره netelites" alt="عکس مشاوره netelites" className="md:w-11/12 h-96 rounded-md" width={525} height={450}/>
                    </div>
                    <div className="md:w-1/2 h-96 flex justify-end items-center">
                        <p className="md:text-justify leading-7">
                            دسته بندی انواع وب سایت
                            انواع سایت ها از نظر طراحی
                            داینامیک. (تغییر محتوا برای مدیر سایت و فردی که هیچ پیش زمینه ای در کدنویسی ندارد به آسانی قابل انجام است.)
                            استاتیک. (تغییر محتوا فقط توسط متخصص برنامه نویسی ممکن است. این نوع سایت ها هزینه نگهداری بسیار بالایی دارند و مدت هاست از رده خارج شدند.)
                            انواع وب سایت فروشگاهی
                            فروش کالای فیزیکی. (مثل مبل، تلویزیون و …)
                            ارائه خدمات مشاوره. (مثل مشاوره تلفنی، مشاوره‌طراحی‌وب‌سایت و …)
                            دوره آموزشی. (فروش دوره های ویدیویی مختلف)
                            انواع سایت شخصی
                            پورتفولیو آنلاین. (نمایش رزومه و تجارب کاری، نمونه کارها و زاه هاس تماس)
                            فروش دوره آموزشی. (مثل سایت احمد کلاته و …)
                            انواع سایت با وردپرس
                            شخصی با اهداف پرسنال برندینگ، پرتفولیو آنلاین و یا فروش دوره آموزشی.
                            طراحی سایت شرکتی. (مثل طراحی سایت موسسه حقوقی با اهدافی مثل جذب موکل و پرونده حقوقی از اینترنت.)
                            شرکتی فروشگاهی.
                            هر سوالی که در زمینه طراحی سایت شخصی، شرکتی و فروشگاهی دارید؛ میتونید در جلسه مشاوره آنلاین طراحی سایت مطرح کنید تا ما به صورت مفصل شما رو راهنمایی کنیم
                        </p>
                    </div>
                </div>
            </section>
        </>
    )
}