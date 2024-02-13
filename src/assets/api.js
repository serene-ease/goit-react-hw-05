import axios from 'axios';
//////////////////////////
const API_KEY = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZmJmMWY5YWNjYzcyMmEyOTI5MjM5ZTkyNDhhYjg4YSIsInN1YiI6IjYyNTE0MjhiOGZkZGE5MGZhZWZkNmI1MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.UpHy-Lf1xSuZ9DEkNqltjjbK7aILELrntHEbQRmA6XQ';
//////////////////////////
axios.defaults.baseURL = 'https://api.themoviedb.org/';
axios.defaults.headers.common['Authorization'] = `Bearer ${API_KEY}`;

const fetchData = async ({queryType, query, page = 1, accessLevel = 3}) => {
    //////////////////////////////  кину swith case (либо свич в свич либо или при наличии пэйдж, нужен ли тип запроса...)
    const queryPrepare = ({queryType, query, page = 1, accessLevel = 3}) => {

            switch (queryType) {                
                case "movies": return(`${accessLevel}/search/movie?query=${query}&include_adult=false&language=en-US&page=${page}`);
                case "movie": return(`${accessLevel}/movie/${movieId}?language=en-US`);
                case "credits": return(`${accessLevel}/movie/${movieId}/credits?language=en-US`);
                case "reviews": return(`${accessLevel}/movie/${movieId}/reviews?language=en-US&${page}`);
                default: return(`${accessLevel}/trending/movie/day?language=en-US`);
            }

        console.log('Query prepared to fetch:', preparedQuery)
        return (preparedQuery)
    }

    // const response = await axios.get(preparedQuery);
    const response = await axios.get('3/trending/movie/day?language=en-US')
        console.log("Response", respoprresponse)
}

export default fetchData