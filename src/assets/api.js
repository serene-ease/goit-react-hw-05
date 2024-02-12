import axios from 'axios';
//////////////////////////
const API_KEY = '7fbf1f9accc722a2929239e9248ab88a';
//////////////////////////
axios.defaults.baseURL = 'https://api.themoviedb.org/';
axios.defaults.headers.common['Authorization'] = `Bearer ${API_KEY}`;

const fetchData = async () => {
//     //////////////////////////////  кину swith case (либо свич в свич либо или при наличии пэйдж, нужен ли тип запроса...)
//     // const queryPrepare = ({queryType, query, page}) => {
//         // return (preparedQuery)
//     }

//     const response = await axios.get(preparedQuery)
}

export default fetchData