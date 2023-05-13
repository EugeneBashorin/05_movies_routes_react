import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {getMovieReviewsInfo} from "../../services/theMovieDb-api.js";

import { StyledReviewsList, StyledReviewsItem, StyledReviewsTitle } from "./Reviews.styled.js";

const Reviews = () => {
    const {movieId} = useParams();
    const [reviews, setReviews] = useState([]);

    useEffect(()=>{
        getMovieReviewsInfo(movieId)
        .then(results => {
            results
            ?setReviews(results)
            :console.log("We didn't find reviews");
          })
    },[movieId]); 
    
    return(
        <div>
            <StyledReviewsList>
                {reviews.length !== 0 
                    ?(reviews.map(({author, id, content}) => (
                        <StyledReviewsItem key={id}>
                            <StyledReviewsTitle>Author: {author}</StyledReviewsTitle>
                            <p>{content}</p>
                        </StyledReviewsItem> ) )
                      )
                     :(<p>We didn't find reviews</p>)   
            }
            </StyledReviewsList>
        </div>
    )
}

export default Reviews;