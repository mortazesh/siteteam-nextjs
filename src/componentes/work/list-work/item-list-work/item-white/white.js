import Image from "next/image"

import image from '/public/Images/relation-adviser.png'

export default function White() {
    return (
        <div className="w-full h-96 flex justify-center items-center mt-16">
            <div className="w-11/12 h-96 flex justify-center items-center flex-row">
                <div className="w-2/5 h-96 flex justify-center items-center">
                    <Image src={image} title="نمونه کار" alt="نمونه کار" width={500} height={384} className="w-full h-96" />
                </div>
                <div className="w-3/5 h-96 flex justify-center items-start text-justify">
                    <p className="w-4/5 h-96 mt-10">
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
                    </p>
                </div>
            </div>
        </div>
    )
}