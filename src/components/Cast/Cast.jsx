import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {StyledCastList, StyledCastItem, StyledImageCastWrapper, StyledCastImg, StyledTitleCast} from "./Cast.styled.js";

import {getMovieCastInfo} from "../../services/theMovieDb-api";
import {DEFAULT_PROFILE_IMG_PATH, IMG_DEFAULT_NO_PHOTO_PROFILE} from "../../defaultImages/defaultImage";

const Cast = () => {
    const {movieId} = useParams();
    const [cast, setCast] = useState([]);

    useEffect(()=>{
      getMovieCastInfo(movieId)
      .then(results => {
        results
        ?setCast(results)
        :console.log("We didn't find actors");
      })
    },[movieId]);   

    return(
    <div>
        <StyledCastList>
          {cast.length !== 0 
            ?(cast.map(({name, character, profile_path, id}) => ( 
              <StyledCastItem key={id}>
                  <div>
                    <StyledImageCastWrapper>
                      <StyledCastImg src={profile_path ? `${DEFAULT_PROFILE_IMG_PATH}${profile_path}` : `${IMG_DEFAULT_NO_PHOTO_PROFILE}`} alt="actor" />
                    </StyledImageCastWrapper>
                    <StyledTitleCast>
                      {name}
                    </StyledTitleCast>
                    <p>
                      {character}
                    </p>
                  </div>
              </StyledCastItem> 
              ))
            )
            :(<p>We can't find information about cast</p>)
        }
        </StyledCastList>
    </div>
  )
}

export default Cast;