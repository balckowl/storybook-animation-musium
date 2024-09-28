import styles from "./Default.module.css"

export default function Default() {
    return (
        <div style={{width: "90vw"}}>
            <div className={styles.wrapper}>
                <div className={`${styles.item}  ${styles.item1}`}></div>
                <div className={`${styles.item}  ${styles.item2}`}></div>
                <div className={`${styles.item}  ${styles.item3}`}></div>
                <div className={`${styles.item}  ${styles.item4}`}></div>
                <div className={`${styles.item}  ${styles.item5}`}></div>
                <div className={`${styles.item}  ${styles.item6}`}></div>
                <div className={`${styles.item}  ${styles.item7}`}></div>
                <div className={`${styles.item}  ${styles.item8}`}></div>
            </div>
        </div>
    )
}
