import axios from "axios";
import { useState,useEffect } from "react";
import Hero from "../../component/Hero/Hero";
import Movies from "../../component/Movies/Movies";
import ENDPOINTS from "../../utility/constant/endpoints";
const TopRated = () => {
  
  const [topRated ,setTopRated] = useState([]);

  async function getTopRated(){
    const res = await axios(ENDPOINTS.TOP_RATED);
    setTopRated(res.data.results)
  }

  useEffect(()=>{
    getTopRated()
  },[])

  console.log(topRated)
   
  return (
    <>
     <Hero />
     <Movies movies={topRated} title="Top Rated"/> 
    </>
  );
};

export default TopRated;
