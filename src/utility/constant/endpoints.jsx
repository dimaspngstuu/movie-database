
//create a variable API KEY which getting from .env
const API_KEY = process.env.REACT_APP_API_KEY;

//create variable index URL
const BASE_URL = "https://api.themoviedb.org/3";


//create a variables (Building using object)
const ENDPOINTS = {
    POPULAR : `${BASE_URL}/movie/popular?api_key=${API_KEY}`,
    TOP_RATED : `${BASE_URL}/movie/top_rated?api_key=${API_KEY}`,
    DETAILS_MOVIE(id){
        return `${BASE_URL}/movie/${id}?api_key=${API_KEY}`
    },
    RECOMMEND_FILM(id){
        return `${BASE_URL}/movie/${id}/recommendations?api_key=${API_KEY}`
    },
    TRENDING_MOVIE :`${BASE_URL}/trending/movie/day?api_key=${API_KEY}`,
    DETAIL_MOVIE(id){
        return `${BASE_URL}/movie/${id}/api_key=${API_KEY}&append_to_response=videos`
    }

}


export default ENDPOINTS