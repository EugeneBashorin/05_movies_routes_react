import {MoviesListUl} from "./MoviesList.styled.js";

import MovieItem from "../MovieItem";

const MoviesList = ({moviesData}) =>{   
    return(
        <MoviesListUl>
            {moviesData.map((movie) => ( 
                <MovieItem movie={movie} key={movie.id}/>
            ))}
        </MoviesListUl>  
    )
}

export default MoviesList;