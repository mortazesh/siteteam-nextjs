import Image from "next/image"

import image from '/public/Images/img-01.png'

import styles from '../../../../../styles/Context.module.css'

export default function ImageTemplet(){
    return(
        <div className={styles.imagecontext}>
            <Image src={image} title="تماس با ما" alt="تماس با ما"/>
        </div>
    )
}