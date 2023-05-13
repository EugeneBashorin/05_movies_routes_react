import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { getMovieByQuery } from "../../services/theMovieDb-api.js"

import MoviesList from "../../components/MoviesList";
import { toast } from 'react-toastify';

import {StyledForm, StyledInput, StyledButton, StyledMovieSearchForm} from "./MovieSearchForm.styled.js"

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
          ? toast.error("We didn't find movies")
          : setMoviesArr(results);
      })
},[movieQuery])

const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    setSearchParams({movieQuery: form.elements[0].value})
}
return(
    <StyledMovieSearchForm>
        <StyledForm onSubmit={handleSubmit}>
            <StyledInput 
                type="text" 
                name={movieQuery}
            />
            <StyledButton type="submit">Search</StyledButton>
        </StyledForm>
        {moviesArr.length !== 0 && <MoviesList moviesData={moviesArr}/>}
    </StyledMovieSearchForm>
  );
};

export default MovieSearchForm;