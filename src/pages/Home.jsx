import React from 'react'
import Hero from '../component/Hero/Hero'
import Movies from '../component/Movies/Movies'
import AddMovieForm from '../component/AddMovieForm/AddMovieForm'
import { useState } from 'react'
import data from '../utility/constant/Data'


const Home = () => {
  const[movies,setMovies] = useState(data)
  return (
    <div>
        <Hero />
        <Movies movies={movies} setMovies={setMovies}/>
        <AddMovieForm movies={movies} setMovies={setMovies} />
    </div>
  )
}

export default Home