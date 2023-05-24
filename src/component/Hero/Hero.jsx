/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import styles from './Hero.module.css'

const Hero = () => {
  
    const [movie,setMovie] = useState("");

    async function getMovie (){
        const url = "https://www.omdbapi.com/?apikey=fcf50ae6&i=tt2975590";
        const res = await fetch(url);
        const data = await res.json();
        setMovie(data);
    }
    console.log(movie)

    useEffect(()=>{
        getMovie()
    },[]);
    

  
  return (
    <div className={styles.container}>
        <section className={styles.hero}>
            <div className={styles.hero__left}>
                <h2 className={styles.hero__title}>{movie.Title}</h2>
                <p className={styles.hero__genre}>{movie.Genre}</p>
                <p className={styles.hero__description}>
                    {movie.Plot}
                </p>
                <button className={styles.hero__button}>Watch</button>
            </div>
            <div className={styles.hero__right}>
            <img
                className={styles.hero__image}
                src={movie.Poster}
                alt="placeholder"
            />
            </div>
        </section>
    </div>
  )
}

export default Hero