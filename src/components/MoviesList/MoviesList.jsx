import { NavLink, useLocation } from "react-router-dom";
import {MoviesListUl, MovieItemLi, Title, Image} from "./MoviesList.styled.js"

import {DEFAULT_POSTER_IMG_PATH, IMG_DEFAULT_NO_PHOTO_POSTER} from "../../defaultImages/defaultImage.jsx"

const MoviesList = ({moviesData}) =>{   
    const location = useLocation(); 
    return(
      //<ContainerWrapper>
        <MoviesListUl>
            {/* <ul> */}
            {moviesData.map((movie) => ( 
                //<li key={movie.id}> 
                    <MovieItemLi  key={movie.id}>
                        <NavLink to={`/movies/${movie.id}`} state={{ from: location }}>
                            <Image src={movie.poster_path? `${DEFAULT_POSTER_IMG_PATH}${movie.poster_path}`: `${IMG_DEFAULT_NO_PHOTO_POSTER}`} alt={movie.original_title}/>
                            <Title>{movie.title ? movie.title : movie.name}</Title>
                        </NavLink>
                    </MovieItemLi>
                //</li> 
            ))}
            {/* </ul> */}
        </MoviesListUl>
      //</ContainerWrapper>    
    )
}

export default MoviesList;