import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Movies from "../Movies/Movies";
import ENDPOINTS from "../../utility/constant/endpoints";

const RecommedFilm = () => {
  const params = useParams();
  const [movies, setMovies] = useState([]);

  async function getRecomFilm() {
    const response = await axios(ENDPOINTS.RECOMMEND_FILM(params.id));
    setMovies(response.data.results);
  }

  useEffect(() => {
    getRecomFilm();
  }, [params.id]);

  return (
    <div>
      <Movies movies={movies} title="Recommend" />
    </div>
  );
};

export default RecommedFilm; 
