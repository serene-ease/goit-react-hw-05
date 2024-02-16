import { useState } from "react"

const SearchBar = () => {
    const [query, setQuery] = useState('');
    const[page,setPage] =useState(1)
    const[total,setTotal] =useState(0)
    const[movies,setMovies] =useState([])

    // const onSearch = async movieQuery =>{

    //     const queryId = nanoid(7);
    //     setQuery(`${queryId}+${movieQuery}`);
    //     setPage(1);
    //     setTotal(0);
    //     setMovies([]);
        

    // }

    const handleInputChange = event => { setQuery(event.target.value) }
    const handleSubmit = event => { event.preventDefault(); onSearch(query); setQuery('') }
    console.log('query', query)
    return (
        <form onSubmit={handleSubmit}>
            <input type='text' onChange={handleInputChange}></input>
            <button type='submit' >Search</button>
        </form>
    )
}
export default SearchBar