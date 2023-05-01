import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { getMovieByQuery } from "../../services/theMovieDb-api.js"

import MoviesList from "../../components/MoviesList";

const MovieSearchForm = () => {
const [moviesArr, setMoviesArr] = useState([])
const [searchParams, setSearchParams] = useSearchParams();
const movieQuery = searchParams.get("movieQuery") ?? "";

useEffect(()=>{
    if(movieQuery === "")
        return;   
    getMovieByQuery(movieQuery)
    .then(results => {
          results.length === 0
          ? console.log("We didn't find movies")
          : setMoviesArr(results);
      })
},[movieQuery])

const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    setSearchParams({movieQuery: form.elements[0].value})
}
return(
    <div>
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                name={movieQuery}
            />
            <button type="submit">Search</button>
        </form>
        {moviesArr.length !== 0 && <MoviesList moviesData={moviesArr}/>}
    </div>
  );
};

export default MovieSearchForm;