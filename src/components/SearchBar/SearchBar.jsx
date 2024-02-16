import { useState } from "react"
///////////////////////////////
const SearchBar = ({onSubmit, callMovie=''}) => {
    ////////////////////////////////
    const [query, setQuery] = useState(callMovie)
    // setQuery(callMovie)
    // console.log('query',query)
    const handleInputChange = event => { setQuery(event.target.value) }    

    const handleSubmit = (event) => {
        event.preventDefault();
        if (query === '') return
        onSubmit(query);
        setQuery('');
    }
    ////////////////////////////////
    return (
        <form onSubmit={handleSubmit}>
            <input type='text' name="query" onChange={handleInputChange} autoComplete="off" autoFocus></input>
            <button type='submit'>Search</button>
        </form>
    )
}
export default SearchBar