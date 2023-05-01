import { useState, useEffect, Suspense } from "react";
import { useParams, NavLink, Outlet, useLocation } from "react-router-dom";
import { getMovieById } from "../../services/theMovieDb-api";

import MovieCard from "../../components/MovieCard";

const MovieDetails = () =>{
    const { movieId } = useParams();
    const [selectedMovie, setSelectedMovie] = useState(null);
    
    const location = useLocation();
    const backLinkHref = location.state?.from ?? "/"

    useEffect(()=>{
        function getSelectedMovie(){getMovieById(movieId)
        .then(movie => {
            movie.length === 0
            ? console.log("We didn't find movies")
            : setSelectedMovie(movie)
          })};
          getSelectedMovie();
    },[movieId])

    return(
        <div>
            <NavLink to={backLinkHref}>Go Back</NavLink>
            {selectedMovie && 
                <div>
                    <MovieCard movieData = {selectedMovie} />
                    <p>Additional information</p>
                    <ul>
                        <li>
                            <NavLink to="cast">Cast</NavLink>
                        </li>
                        <li>
                            <NavLink to="reviews">Reviews</NavLink>
                        </li>
                    </ul>
                    <Suspense fallback={<div>Subpage load...</div>}>
                        <Outlet />
                    </Suspense>
                </div>
            }
        </div>
    )
}

export default MovieDetails;