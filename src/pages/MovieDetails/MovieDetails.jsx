import { useState, useEffect, Suspense } from "react";
import {ReactComponent as BackLogo} from '../../defaultImages/return_up_back_icon.svg';
import { useParams, Outlet, useLocation } from "react-router-dom";
import { getMovieById } from "../../services/theMovieDb-api";

import MovieCard from "../../components/MovieCard";
import Loader from "../../components/Loader";

import {MovieDetailsWrapper, DetailsWrapper, StyledLink, InfoStyledLink, StyledAddInfoWrapper} from "./MovieDetails.styled.js"

const MovieDetails = () =>{
    const { movieId } = useParams();
    const [selectedMovie, setSelectedMovie] = useState(null);
    const [status, setStatus]=useState('idle');
    
    const location = useLocation();
    const backLinkHref = location.state?.from ?? "/"

    useEffect(()=>{
        function getSelectedMovie(){
            setStatus('pending');
            getMovieById(movieId)
            .then(movie => {
                if(movie.length === 0){
                    console.log("We didn't find movies");
                    setStatus("rejected");
                }else{
                    setSelectedMovie(movie);
                    setStatus("resolve");
                }
          })};
          getSelectedMovie();
    },[movieId])

    return(
        <MovieDetailsWrapper>
            <StyledLink to={backLinkHref}><BackLogo width={"30px"} height={"30px"}/>Go Back</StyledLink>
            {status === "pending" && <Loader/>}
            {selectedMovie && 
                <DetailsWrapper>
                    <MovieCard movieData = {selectedMovie} />
                    <div className="AdditionalInfoSection">
                        <h3>Additional information</h3>
                        <StyledAddInfoWrapper>
                            <InfoStyledLink to="cast">Cast</InfoStyledLink>
                            <InfoStyledLink to="reviews">Reviews</InfoStyledLink>
                        </StyledAddInfoWrapper>
                        <Suspense fallback={<Loader/>}>
                            <Outlet />
                        </Suspense>
                    </div>
                </DetailsWrapper>
            }
            {!selectedMovie || (status === "rejected" && <h3>Sorry, we didn't find information</h3>)}
        </MovieDetailsWrapper>
    )
}

export default MovieDetails;