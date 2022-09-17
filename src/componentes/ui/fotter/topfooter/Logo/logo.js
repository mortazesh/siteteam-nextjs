import Image from "next/image"

import styles from "../../../../../../styles/Fotter.module.css"

import image from '/public/Images/netelites.jpg'

export default function Logo() {
    return(
        <div className={styles.menufooter}>
            <div className={styles.imagefooter}>
                <Image src={image} title="لوگو netelites" alt="لوگو netelites" height={450}/>
            </div>
        </div>
    )
}