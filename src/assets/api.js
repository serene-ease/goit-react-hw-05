import axios from 'axios';
//////////////////////////
const API_KEY = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZmJmMWY5YWNjYzcyMmEyOTI5MjM5ZTkyNDhhYjg4YSIsInN1YiI6IjYyNTE0MjhiOGZkZGE5MGZhZWZkNmI1MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.UpHy-Lf1xSuZ9DEkNqltjjbK7aILELrntHEbQRmA6XQ';
//////////////////////////
axios.defaults.baseURL = 'https://api.themoviedb.org/';
axios.defaults.headers.common['Authorization'] = `Bearer ${API_KEY}`;
// async modQuery 
const fetchData = async (modQuery) => {
    console.log('modQuery', modQuery)
    ////////////////////////////////////////
    const queryPrepare = ({queryType, query = '', page = 1, movieId = null, accessLevel = 3, lang = 'en-US' }) => {
        switch (queryType) {
            case "movies": return (`${accessLevel}/search/movie?query=${query}&include_adult=false&language=${lang}&page=${page}`);
            case "movie": return (`${accessLevel}/movie/${movieId}?language=${lang}`);
            case "credits": return (`${accessLevel}/movie/${movieId}/credits?language=${lang}`);
            case "reviews": return (`${accessLevel}/movie/${movieId}/reviews?language=${lang}&${page}`);
            default: return (`${accessLevel}/trending/movie/day?language=${lang}`);
        }
    }
    const preparedQuery = queryPrepare(modQuery)
    /////////////////////////////////////////
    console.log('Function queryPrepare:', preparedQuery)

    // const response = await axios.get(preparedQuery, { signal: modQuery.signal });
    const response = await axios.get(preparedQuery, modQuery.abortController.signal );
    // const response = await axios.get('3/trending/movie/day?language=en-US')  
    console.log("Response", response)
    return response
}

export default fetchData