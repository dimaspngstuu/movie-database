/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import Button from "../UI/Button/Button";
import StyledHero from "./StyledHero";

const Hero = () => {
  const [movie, setMovie] = useState("");

  async function getMovie() {
    const url = "https://www.omdbapi.com/?apikey=fcf50ae6&i=tt2975590";
    const res = await fetch(url);
    const data = await res.json();
    setMovie(data);
  }
  console.log(movie);

  useEffect(() => {
    getMovie();
  }, []);

  return (
    <StyledHero>
      <section className="hero">
        <div className="hero__left">
          <h2 className="hero__title">{movie.Title}</h2>
          <p className="hero__genre">{movie.Genre}</p>
          <p className="hero__description">{movie.Plot}</p>
          <Button variant="danger" size="sm">Watch</Button>
        </div>
        <div className="hero__right">
          <img className="hero__image" src={movie.Poster} alt="placeholder" />
        </div>
      </section>
    </StyledHero>
  );
};

export default Hero;
