import React from 'react'
import StyledMovie from './StyledMovie'



const Movie = ({movie}) => {
  return (
    <StyledMovie>
      <img 
          src={movie.poster || `https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
          alt=""  
        />
        <h3>{movie.title}</h3>
        <h6>{movie.type}</h6>
        <p>{movie.year || movie.release_date}</p>
    </StyledMovie>
          

  )
}

export default Movie