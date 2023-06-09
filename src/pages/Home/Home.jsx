import { useState } from "react";
import { useEffect } from "react";
import {getTrendsMovies} from "../../services/theMovieDb-api"
import MoviesList from "../../components/MoviesList"
import {Title, ListSectionWrapper} from "./Home.styled"

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
      <ListSectionWrapper>
        <Title>Trending today</Title>
        {moviesArr.length !== 0 && <MoviesList moviesData={moviesArr}/>}
      </ListSectionWrapper>
    );
  };
  
export default Home;