import { useState, useEffect, useRef } from 'react';
import { useParams } from "react-router-dom"
import fetchData from '../../assets/api'
import CurrentMovieItem from '../../components/CurrentMovieItem/CurrentMovieItem';

const CurrentMovie = () => {
    
    const {currentMovie} = useParams();
    const [current, setCurrent] = useState([])
    // const backLinkRef = useRef(location.state ?? '/movies');
    // const [error, setError] = useState(null);
    // const [spiner, setSpiner] = useState(null);
    

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
                   
                setCurrent(fethedData.data)
                
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
            
            {current && <CurrentMovieItem movie={current} />}
        </div>
    )

}


export default CurrentMovie