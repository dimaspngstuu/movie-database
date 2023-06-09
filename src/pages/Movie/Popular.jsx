import axios from "axios"
import { useEffect,useState } from "react"
import Movies from "../../component/Movies/Movies"
import Hero from "../../component/Hero/Hero"

const Popular = () => {
  const [movies,setMovies] = useState([]);
  const API_KEY = process.env.REACT_APP_API_KEY;
  const URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
  


  async function fetchMovie(){
    const response = await axios(URL)
    setMovies(response.data.results)
  }

  useEffect(()=>{
    fetchMovie()
  },[]);




  




  return (
    <>
      <Hero/>
      <Movies movies={movies}/>
    </>
   
  )
}

export default Popular