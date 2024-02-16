import { useEffect, useState } from "react";
import { Link, useLocation} from "react-router-dom";
import fetchData from "../../assets/api";
import MovieItem from '../MovieItem/MovieItem';

const TrendingList = () => {
    const [trendingMovies, setTrendingMovies] = useState([]);
    const [error, setError] = useState(null);
    const [spiner, setSpiner] = useState(null);
    const location = useLocation();

    useEffect(() => {
        const controller = new AbortController();
        setSpiner(true);
        setError(false);

        async function fetchDataR() {
            try {
                const fethedData = await fetchData(
                    {
                        abortController: controller
                    }
                )
                console.log('fethedData.data.reults:', fethedData.data.results)
                setTrendingMovies(fethedData.data.results)

            }
            catch { if (error.code !== 'ERR_CANCELED') { setError(true) } }
            finally { setSpiner(false) }
        }
        fetchDataR();
        return () => { controller.abort() }
    }, [])
    console.log('Trending', trendingMovies)
    return (
        <ul>
            <h2>Trending today</h2>
            {
                trendingMovies.map(movie => (
                    <li key={movie.id}>
                        <p>{movie.title}</p>
                        <Link to={`/movies/${movie.id}`} state={location}>
                            <MovieItem movie={movie} />
                        </Link>
                    </li>
                ))
            }
        </ul>
    )
}

export default TrendingList