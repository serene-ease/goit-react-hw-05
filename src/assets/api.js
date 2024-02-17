import axios from 'axios';
const API_KEY = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZmJmMWY5YWNjYzcyMmEyOTI5MjM5ZTkyNDhhYjg4YSIsInN1YiI6IjYyNTE0MjhiOGZkZGE5MGZhZWZkNmI1MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.UpHy-Lf1xSuZ9DEkNqltjjbK7aILELrntHEbQRmA6XQ';
axios.defaults.baseURL = 'https://api.themoviedb.org/';
axios.defaults.headers.common['Authorization'] = `Bearer ${API_KEY}`;

const fetchData = async (modQuery) => {
    
    ////////////////////////////////////////
    const queryPrepare = ({queryType, query = '', page = 1, accessLevel = 3, lang = 'en-US' }) => {
        switch (queryType) {
            case "movies": return (`${accessLevel}/search/movie?query=${query}&include_adult=false&language=${lang}&page=${page}`);
            case "movie": return (`${accessLevel}/movie/${query}?language=${lang}`);
            case "credits": return (`${accessLevel}/movie/${query}/credits?language=${lang}`);
            case "reviews": return (`${accessLevel}/movie/${query}/reviews?language=${lang}&${page}`);
            default: return (`${accessLevel}/trending/movie/day?language=${lang}`);
        }
    }
    const preparedQuery = queryPrepare(modQuery)
    const response = await axios.get(preparedQuery, modQuery.abortController.signal );
   
   
    ////////////look on it////////////
    console.log("Response", response)
    //////////////////////////////////

    return response
}

export default fetchData