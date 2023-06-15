/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import Button from "../UI/Button/Button";
import StyledHero from "./StyledHero";
import axios from "axios";



const Hero = () => {
  const [movie, setMovie] = useState("");
  const API_KEY = process.env.REACT_APP_API_KEY;
  const genres = movie && movie.genres.map((genre) => genre.name).join(", ");
  const Trailer =
    movie && `https://www.youtube.com/watch?v=${movie.videos.results[0].key}`;


  async function getTrendMovie() {
    const URL = `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`;
    const response = await axios(URL);
    return response.data.results[1];
  }

  async function getDetailMovie() {
    const trendingMovie = await getTrendMovie();
    const id = trendingMovie.id;

    const URL = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&append_to_response=videos`;
    const response = await axios(URL);
    setMovie(response.data);
  }

  useEffect(() => {
    getDetailMovie();
  }, []);

  return (
    <StyledHero>
      <section className="hero">
        <div className="hero__left">
          <h3 className="hero__title">{movie.title}</h3>
          <h3>Genre : {genres}</h3>
          <br />
          <p className="hero__genre">{movie.overview}</p>
          <p className="hero__description">{movie.Plot}</p>
          <Button as="a" href={Trailer} target="_blank">
            Watch
          </Button>
        </div>
        <div className="hero__right">
          <img
            className="hero__image"
            src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
            alt="placeholder"
          />
        </div>
      </section>
    </StyledHero>
  );
};

export default Hero;
   