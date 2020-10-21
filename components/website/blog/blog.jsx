
import React from 'react'
import styles from './blog.less'

const Blog  = () => {
    return ( 
        <>
            <div className={styles.wrapper}>
                <h2>Blog posts</h2>
                <p className={styles.blogItem}>
                    <a href="#">An example blog posts will go here</a>
                    <p>This is how I manaaged to get this website up and running!</p>
                </p>
                <p className={styles.blogItem}>
                    <a href="#">An example blog posts will go here</a>
                    <p>This is how I manaaged to get this website up and running!</p>
                </p>
                <p className={styles.blogItem}>
                    <a href="#">An example blog posts will go here</a>
                    <p>This is how I manaaged to get this website up and running!</p>
                </p>
            </div>
        </>
    )
}
export default Blog