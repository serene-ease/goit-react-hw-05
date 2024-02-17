import { Link, useLocation } from 'react-router-dom'
import MovieItem from '../MovieItem/MovieItem'

const MoviesCatalogue = ({movies}) => {
    console.log('movies', movies)
    const location = useLocation();
    return (
        <ul>
            {
                movies.map(movie => (
                    <li key={movie.id}>
                        <Link to={`/movies/${movie.id}`} state={location}>
                            <MovieItem movie={movie} />
                        </Link>
                    </li>
                ))
            }
        </ul>
    )
}

export default MoviesCatalogue