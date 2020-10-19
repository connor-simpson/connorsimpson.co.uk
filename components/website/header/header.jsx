import styles from "./header.module.less"

const Header = () => {

    return (
        <div className={styles.header}>
            <h1 className={styles.headerTitle}>I'm Connor, 👋</h1>
            <div className={styles.headerWrapper}>
                <p className={styles.headerSubtitle}>I'm a software engineer from</p>
                <img className={styles.unionJack} src="./images/union_jack.png" />
            </div>
        </div>
    )

}

export default Header