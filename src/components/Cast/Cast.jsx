import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

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
        <ul>
          {cast.length !== 0 
          ?(cast.map(({name, character, profile_path, id}) => ( 
            <li key={id}>
                <div>
                  <div>
                    <img src={profile_path ? `${DEFAULT_PROFILE_IMG_PATH}${profile_path}` : `${IMG_DEFAULT_NO_PHOTO_PROFILE}`} alt="actor" />
                  </div>
                  <p>
                    {name}
                  </p>
                  <p>
                    {character}
                  </p>
                </div>
            </li> 
            ))
          )
          :(<p>We can't find cast</p>)
        }
        </ul>
    </div>
  )
}

export default Cast;