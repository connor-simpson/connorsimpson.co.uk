import React from 'react'
import styles from "./header.less"

const Header = ({ title, subtitle }) => {

    return (
        <div className={styles.header}>
            <h1 className={styles.headerTitle} id="headerTitle">{title}</h1>
            <div className={styles.headerWrapper}>
                <p className={styles.headerSubtitle} id="headerSubtitle">{subtitle}</p>
            </div>
        </div>
    )

}

export default Header