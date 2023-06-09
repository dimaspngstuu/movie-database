import axios from "axios";
import { useState,useEffect } from "react";
import Hero from "../../component/Hero/Hero";
import Movies from "../../component/Movies/Movies";

const TopRated = () => {
  const API_KEY = process.env.REACT_APP_API_KEY;
  const URL = `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}`;
  const [topRated ,setTopRated] = useState([]);

  async function getTopRated(){
    const res = await axios(URL);
    setTopRated(res.data.results)
  }

  useEffect(()=>{
    getTopRated()
  },[])

  console.log(topRated)
   
  return (
    <>
     <Hero />
     <Movies movies={topRated}/> 
    </>
  );
};

export default TopRated;
