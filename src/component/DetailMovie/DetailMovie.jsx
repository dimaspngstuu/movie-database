import React from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import ENDPOINTS from "../../utility/constant/endpoints";

const DetailMovie = () => {

  const params = useParams();
  const [movie, setMovie] = useState("");

  async function getDetails() {
    // const URL = `https://api.themoviedb.org/3/movie/${params.id}?api_key=${API_KEY}`;
    const response = await axios(ENDPOINTS.DETAILS_MOVIE(params.id));
    setMovie(response.data);
  }

  useEffect(() => {
    getDetails();
  }, [params.id]);

  console.log(movie);

  return (
    <>
      <h2>{movie.title}</h2>
      <img
        src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
        alt=""
      />
    </>
  );
};

export default DetailMovie;
