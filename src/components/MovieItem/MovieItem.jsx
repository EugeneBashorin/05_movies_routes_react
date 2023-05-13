import { NavLink, useLocation } from "react-router-dom";

import { MovieItemLi, Title, Image} from "./MovieItem.styled.js";
import {DEFAULT_POSTER_IMG_PATH, IMG_DEFAULT_NO_PHOTO_POSTER} from "../../defaultImages/defaultImage.jsx";

const MovieItem = ({movie}) => {
    const{id, poster_path, original_title, title, name}=movie;
    const location = useLocation();
    return(
        <MovieItemLi  key={movie.id}>
            <NavLink to={`/movies/${id}`} state={{ from: location }}>
                <Image src={poster_path? `${DEFAULT_POSTER_IMG_PATH}${poster_path}`: `${IMG_DEFAULT_NO_PHOTO_POSTER}`} alt={original_title}/>
                <Title>{title ? title : name}</Title>
            </NavLink>
        </MovieItemLi>
    )
}

export default MovieItem;