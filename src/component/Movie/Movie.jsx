import React from 'react'
import styles from './Movie.module.css'

const Movie = ({movie}) => {
  return (
    <div className={styles.movie}>
        <img 
        className={styles.movie__image}
        src={movie.poster} 
        alt=""  />
        <h3 className={styles.movie__title}>{movie.title}</h3>
        <p className={styles.movie__data}>{movie.year}</p>
    </div>
  )
}

export default Movie