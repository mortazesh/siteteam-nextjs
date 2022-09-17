import Image from 'next/image'

import styles from '../../../../../styles/Article.module.css'

export default function Item({ result }) {
    return (
        <div className={styles.imgbox}>
            <img src="" alt="" title="" />
            <h2>لورم</h2>
            <p>لورم ایپسوم متن ساختگی ب چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که. کا وز طرا ننان که. کتابهای زیادی در شصت و سه درصد </p>
            <h2>نویسنده : دانیال</h2>
        </div>
    )
}