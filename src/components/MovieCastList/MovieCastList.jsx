import MovieCastItem from '../MovieCastItem/MovieCastItem'

const MovieCastList = ({ items }) => {
    console.log('items', items);
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