import axios from "axios";
import Movies from "../../component/Movies/Movies";
import Hero from "../../component/Hero/Hero";
import ENDPOINTS from "../../utility/constant/endpoints";
import { useDispatch } from "react-redux";
import { updateMovie } from "../../features/movieSlice";
import { useEffect } from "react";

const Popular = () => {

  const dispatch = useDispatch()

  async function fetchMovie() {
    const response = await axios(ENDPOINTS.POPULAR);
    dispatch(updateMovie(response.data.results))
  }

  useEffect(() => {
    fetchMovie();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Hero />
      <Movies title="Popular" />
    </>
  );
};

export default Popular;
