import axios from "axios"
import { useState, useEffect } from "react"
import Hero from "../../component/Hero/Hero";
import Movies from "../../component/Movies/Movies";


const NowPlaying = () => {
  const [movie, setMovie] = useState([])
  const API_KEY = process.env.REACT_APP_API_KEY;
  const URL = `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}`
  
  async function getNowFilm(){
    const response = await axios (URL)
    setMovie(response.data.results)
  
  }

  useEffect(()=>{
    getNowFilm()
  },[])

  console.log(URL)
  console.log(movie)


  return (
    <>
      <Hero />
      <Movies movies={movie} title='Now Playing'/>
    </>
  
  )
}

export default NowPlaying