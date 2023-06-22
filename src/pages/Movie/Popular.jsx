import axios from "axios";
import { useEffect, useState } from "react";
import Movies from "../../component/Movies/Movies";
import Hero from "../../component/Hero/Hero";
import ENDPOINTS from "../../utility/constant/endpoints";

const Popular = () => {
  const [movies, setMovies] = useState([]);

  async function fetchMovie() {
    const response = await axios(ENDPOINTS.POPULAR);
    setMovies(response.data.results);
  }

  useEffect(() => {
    fetchMovie();
  }, []);

  return (
    <>
      <Hero />
      <Movies movies={movies} title="Popular" />
    </>
  );
};

export default Popular;
