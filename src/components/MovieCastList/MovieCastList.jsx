import MovieCastItem from '../MovieCastItem/MovieCastItem'

const MovieCastList = ({ items }) => {
    
    return (
        <ul >
            {items && items.map(item => (
                <li key={item.id} >
                    <MovieCastItem item={item} />
                </li>
            ))}
        </ul>
    )

}

export default MovieCastList