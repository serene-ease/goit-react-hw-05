import { useState } from "react"

const SearchBar = ({ onSearch }) => {
    const [query, setQuery] = useState('');

    const handleInputChange = event => { setQuery(event.target.value) }
    const handleSubmit = event => { event.preventDefault(); onSearch(query); setQuery('') }

    return (
        <form onSubmit={handleSubmit}>
            <input type='text' onChange={handleInputChange}></input>
            <button type='submit'>Search</button>
        </form>
    )
}
export default SearchBar