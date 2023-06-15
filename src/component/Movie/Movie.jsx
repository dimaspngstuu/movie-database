import React from 'react'
import StyledMovie from './StyledMovie'
import { Link } from 'react-router-dom'



const Movie = ({movie}) => {
  return (
    <StyledMovie>
      <Link to={`/movie/${movie.id}`}>
        <img 
            src={movie.poster || `https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
            alt=""  
          />
          <h3>{movie.title}</h3>
      </Link>
        <h6>{movie.type}</h6>
        <p>{movie.year || movie.release_date}</p>
    </StyledMovie>
          

  )
}

export default Movie