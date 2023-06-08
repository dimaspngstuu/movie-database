/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import Button from "../UI/Button/Button";
import StyledHero from "./StyledHero";
import axios from "axios";

const Hero = () => {
  const [movie, setMovie] = useState("");
  const API_KEY = process.env.REACT_APP_API_KEY;

  // async function getMovie() {
  //   const url = "https://www.omdbapi.com/?apikey=fcf50ae6&i=tt2975590";
  //   const res = await fetch(url);
  //   const data = await res.json();
  //   setMovie(data);
  // }
  // console.log(movie); 

  // useEffect(() => {
  //   getMovie();
  // }, []);

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

  console.log(movie)

  


  useEffect(() => {
    getDetailMovie();
  }, []);

  return (
    <StyledHero>
      <section className="hero">
        <div className="hero__left">
          <h2 className="hero__title">{movie.title}</h2>
          <h3>What a genre?</h3>
          <p className="hero__genre">{movie.overview}</p>
          <p className="hero__description">{movie.Plot}</p>
          <Button variant="danger" size="sm">
            Watch
          </Button>
        </div>
        <div className="hero__right">
          <img className="hero__image" src={movie.poster_path} alt="placeholder" />
        </div>
      </section>
    </StyledHero>
  );
};

export default Hero;
