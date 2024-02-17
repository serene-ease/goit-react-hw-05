import { useState, useEffect, useRef } from 'react';
import { Link, useParams } from "react-router-dom"
import fetchData from '../../assets/api'
import CurrentMovieItem from '../../components/CurrentMovieItem/CurrentMovieItem';

const CurrentMovie = () => {
    
    const {currentMovie} = useParams();
    const [current, setCurrent] = useState([])
    const backLinkRef = useRef(location.state);


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

   
            }
            catch { if (error.code !== 'ERR_CANCELED') { setError(true) } }
            finally { }
        }
        fetchDataR();
        return () => { controller.abort() }
    }, [currentMovie])

    return (
        <div>
            <Link to={backLinkRef.current ?? '/'}>Back</Link>
            {current && <CurrentMovieItem movie={current} />}
        </div>
    )

}


export default CurrentMovie