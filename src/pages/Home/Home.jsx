import { useState } from "react";
import { useEffect } from "react";
import {getTrendsMovies} from "../../services/theMovieDb-api"
import MoviesList from "../../components/MoviesList"

const Home = () => {

  const [moviesArr, setMoviesArr] = useState([]);

  useEffect(()=>{
      getTrendsMovies()
      .then(data => data.results)
      .then(results => {
        results.length === 0
        ? console.log("We didn't find movies")
        : setMoviesArr(results);
      });
    },[]
  )
    return (
      <div>
        <h2>Trending today</h2>
        {moviesArr.length !== 0 && <MoviesList moviesData={moviesArr}/>}
      </div>
    );
  };
  
export default Home;