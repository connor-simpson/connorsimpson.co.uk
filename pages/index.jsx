import styles from '../styles/Home.module.less'

import React from 'react'
import Wrapper from '../layout/Wrapper'

const Home = () => {

  return <Wrapper>
    <section className={styles.header}>
      <img src={'../images/memojis/happyThumbsUp.png'} className={styles.memoji} />
      <h1 className={styles.titleText}>Hey there! I'm Connor.</h1>
      <p className={styles.paragraphText}>I'm a software engineer based in Wigan. I am currently working at <a href="https://www.jdplc.com/" class={styles.link}>JD Sports Plc</a>.</p>
      <p className={styles.paragraphText}>I'm in love with Next, and learning more and more about the powerful V8 Runtime, but I have using PHP and Laravel for the past 14 years 😜.</p>
      <p className={styles.paragraphText}>You can see what I'm upto on <a href="" class={styles.link}>Twitter</a> and <a href="https://www.jdplc.com/" class={styles.link}>Github</a>.</p>
  
    </section>
  </Wrapper>

}

export default Home
