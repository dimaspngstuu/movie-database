import React from 'react'
import styles from './Hero.module.css'

const Hero = () => {
  return (
    <div className={styles.container}>
        <section className={styles.hero}>
            <div className={styles.hero__left}>
                <h2 className={styles.hero__title}>Spiderman</h2>
                <p className={styles.hero__genre}>Action</p>
                <p className={styles.hero__description}>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet, eius!
                </p>
                <button>Watch</button>
            </div>
            <div className="hero__right">
            <img
                className={styles.hero__image}
                src="https://picsum.photos/536/354"
                alt="placeholder"
            />
            </div>
        </section>
    </div>
  )
}

export default Hero