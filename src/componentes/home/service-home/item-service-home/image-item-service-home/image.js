import styles from '../../../../../../styles/Home.module.css'

export default function Image({ image , alt , title }) {
    return (
        <div className={styles.imageservices}>
            <img src={image} alt={alt} title={title} />
        </div>
    )
}