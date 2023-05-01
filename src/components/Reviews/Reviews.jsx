import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import {getMovieReviewsInfo} from "../../services/theMovieDb-api.js"

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
            <ul>
                {reviews.length !== 0 
                    ?(reviews.map(({author, id, content}) => (
                        <li key={id}>
                            <h4>Author: {author}</h4>
                            <p>{content}</p>
                        </li> ) )
                      )
                     :(<p>We didn't find reviews</p>)   
            }
            </ul>
        </div>
    )
}

export default Reviews;