import Movie from '../Movie/Movie'
import styles from './Movies.module.css'
import data from '../../utility/constant/Data'
import { useState } from "react";
import {nanoid} from 'nanoid';



const Movies = () => {
  const [movies,setMovies] = useState(data);

  const AddFilm = () => {
    const movie = {
      id: nanoid(12),
      title: "Spirak",
      year: "2021",
      type: "Movie",
      poster:"https://picsum.photos/300/400"
    }
    
    setMovies([...movies,movie])
  }

  console.log(movies)



  return (
    <div className={styles.container}>
        <section className={styles.movies}>
            <h2 className={styles.movies__title}>Latest Movies</h2>
            <div className={styles.movie__container}>
              {movies.map((movie)=>{
                return <Movie key={movie.id} movie={movie}/>
              })}
            </div>
            <button onClick = {AddFilm}>Add Movie</button>
        </section>
    </div>
  )
}

export default Movies