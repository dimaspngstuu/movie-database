import React from 'react'
import StyledMovie from './StyledMovie'



const Movie = ({movie}) => {

  console.log((movie))
  return (
    <StyledMovie>
      <img 
          src={movie.poster} 
          alt=""  
        />
        <h3>{movie.title}</h3>
        <h6>{movie.type}</h6>
        <p>{movie.year}</p>
    </StyledMovie>
          

  )
}

export default Movie