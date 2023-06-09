import {CardWrapper, ImageWrapper, PosterImg, DescriptionWrapper} from "./MovieCard.styled.js"

import {DEFAULT_POSTER_IMG_PATH, IMG_DEFAULT_NO_PHOTO_POSTER} from "../../defaultImages/defaultImage.jsx"

const MovieCard = ({movieData}) => {

    const {poster_path, original_title, vote_average, overview, genres} = movieData;

    return(
    <CardWrapper>
        <div>
            <ImageWrapper>
                <PosterImg src={poster_path? `${DEFAULT_POSTER_IMG_PATH}${poster_path}`: `${IMG_DEFAULT_NO_PHOTO_POSTER}`} alt={original_title}/>
            </ImageWrapper>   
        </div>
        <div>
            <DescriptionWrapper>           
                <h2>{original_title}</h2>
                <p>User score: {parseInt(vote_average)*10}%</p>
                <h3>Overview</h3>
                <p>{overview}</p>
                <h3>Genres</h3>
                <p>{genres.map(genre => genre.name).join(", ")}</p>
            </DescriptionWrapper> 
        </div>
    </CardWrapper>
  )
}

export default MovieCard;