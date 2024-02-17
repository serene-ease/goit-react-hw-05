import { useState, useEffect, useRef } from 'react';
import { useParams } from "react-router-dom"
import fetchData from '../../assets/api'
import CurrentMovieItem from '../../components/CurrentMovieItem/CurrentMovieItem';

const CurrentMovie = () => {
    
    const {currentMovie} = useParams();
    // console.log('currentMovie', currentMovie);
    const [current, setCurrent] = useState([])
    // const backLinkRef = useRef(location.state ?? '/movies');
    // const [error, setError] = useState(null);
    // const [spiner, setSpiner] = useState(null);
    console.log(currentMovie);

    useEffect(() => {
        const controller = new AbortController();
        // if (currentMovie === '') return

        async function fetchDataR() {
            try {
                const fethedData = await fetchData(
                    {
                        queryType: "movie",
                        query: currentMovie,
                        abortController: controller
                    }
                )
                   console.log('fethedData', fethedData)
                setCurrent(fethedData.data)
                console.log('fethedData.data.results', fethedData.data);
                //    console.log('fethedData.data.results', fethedData.data.results)
                //    setPage(fetchedData.data.total_pages)
                // totalPages.current = fetchedData.data.total_pages;
                // totalResults.current = fetchedData.data.total_results;
            }
            catch { if (error.code !== 'ERR_CANCELED') { setError(true) } }
            finally { }
        }
        fetchDataR();
        return () => { controller.abort() }
    }, [currentMovie])

    return (
        <div>
            <h1>Current Movie</h1>
            {current && <CurrentMovieItem movie={current} />}
        </div>
    )

}


export default CurrentMovie