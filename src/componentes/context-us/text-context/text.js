import styles from '../../../../styles/Context.module.css'

export default function Text() {
    return (
        <div className={styles.box}>
            <div className={styles.callus}>
                <h2>تماس با ما</h2>
            </div>
            <div className={styles.contexttext}>
                <p>در صورت هر گونه ابهام می توانید سوال خود را در این قسمت با ما در میان بگذارید.
                    کارشناسان <br /> ما تا نهایتا 12 ساعت بعد به سوال شما پاسخ خواهند داد.</p>
            </div>
        </div>
    )
}