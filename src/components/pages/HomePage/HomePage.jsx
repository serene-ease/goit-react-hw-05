import { useEffect, useState } from "react"
import fetchData from '../../../assets/api'
import Header from "../../Header/Header";

const HomePage = () => {
    // const [trendingMovies, setTrendingMovies] = useState([]);
    // const [error, setError] = useState(null);
    // const [spiner, setSpiner] = useState(null);

    // useEffect(() => {
    //     const controller = new AbortController();
    //     setLoading(true);
    //     setError(false);

    //     async function fetchDataR() {
    //         try {
    //             const fethedData = await fetchData(
    //                 {
    //                     signal: controller.signal
    //                 })
    //             setTrendingMovies(fethedData)
    //         }
    //         catch { if (error.code !== 'ERR_CANCELED') { setError(true) } }
    //         finally { setSpiner(false) }
    //     }
    //     fetchDataR();
    //     return () => { controller.abort() }
    // }, [])
    // const att = { queryType: "movies", query: 'batman'}
        const modQuery = {queryType: "movies", query: "Lion"}
        fetchData(modQuery)

    return (
        <div>
            <Header />
            <ul>
                <p>Homepage</p>
                
            </ul>
        </div>
    )
}

export default HomePage