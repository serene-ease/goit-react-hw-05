import { useEffect, useState } from "react";
import fetchData from "../../assets/api";
import MoviesCatalogue from "../MoviesCalogue/MoviesCatlogue";

const TrendingList = () => {

    //////////////////////////////////
    const [trendingMovies, setTrendingMovies] = useState([]);
    const [error, setError] = useState(null);
    const [spiner, setSpiner] = useState(null);


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
                // console.log('fethedData.data.reults:', fethedData.data.results)
                setTrendingMovies(fethedData.data.results)

            }
            catch { if (error.code !== 'ERR_CANCELED') { setError(true) } }
            finally { setSpiner(false) }
        }
        fetchDataR();
        return () => { controller.abort() }
    }, [])
    //////////////////////////////////
    console.log('Trending', trendingMovies)
    return (
        <div>
            <h1>Trending today</h1>
            {trendingMovies.length > 0 && <MoviesCatalogue movies={trendingMovies} />}            
        </div>
    )
}

export default TrendingList