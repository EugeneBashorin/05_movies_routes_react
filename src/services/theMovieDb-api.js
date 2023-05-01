const API_KEY = "5f18f730f6bdd06d8fd398ec26197a19";
const baseURL = "https://api.themoviedb.org/3/"

const trendsQueryUrl = "trending/movie/day"
const urlMovieParameter  = "movie/";
const urlQueryParameter ="search/movie";

export const getTrendsMovies = () => {
    return fetch(`${baseURL}${trendsQueryUrl}?api_key=${API_KEY}`)
        .then(response => {
            if(!response.ok){
                throw new Error (response.status);
            }
        return response.json();
        })
        .then(data => data)
        .catch(error => console.log("Error Message: ", error))
}

export const getMovieById = (movieId) => {
    return fetch(`${baseURL}${urlMovieParameter}${movieId}?api_key=${API_KEY}&language=en-US`)
        .then(response => {
            if(!response.ok){
                throw new Error (response.status);
            }
        return response.json();
        })
        .then(data => data)
        .catch(error => console.log("Error Message: ", error))
}

export const getMovieCastInfo = (movieId) => {
    return fetch(`${baseURL}${urlMovieParameter}${movieId}/credits?api_key=${API_KEY}`)
    .then(response => {
        if(!response.ok){
            throw new Error (response.status);
        }
    return response.json();
    })
    .then(data => data.cast)
    .catch(error => console.log("Error Message: ", error))
}

export const getMovieReviewsInfo = (movieId) => {
    return fetch(`${baseURL}${urlMovieParameter}${movieId}/reviews?api_key=${API_KEY}`)
    .then(response => {
        if(!response.ok){
            throw new Error (response.status);
        }
    return response.json();
    })
    .then(data => data.results)
    .catch(error => console.log("Error Message: ", error))
}

export const getMovieByQuery = (movieQuery) => {
    const params = new URLSearchParams({
        query: movieQuery,
        api_key: API_KEY,
    })
    return fetch(`${baseURL}${urlQueryParameter}?${params}`)
    .then(response => {
        if(!response.ok){
            throw new Error (response.status);
        }
    return response.json();
    })
    .then(data => data.results)
    .catch(error => console.log("Error Message: ", error))
}