import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import fetchData from '../../assets/api';
import MovieCastList from '../MovieCastList/MovieCastList';

const MovieCast = () => {
    const {currentMovie} = useParams();
    const [cast, setCast] = useState([]);
    const [error, setError] = useState(false);

    useEffect(() => {
        const controller = new AbortController();
        
        async function fetchDataCast() {
            try {
                const fethedData = await fetchData(
                    {
                        queryType: "credits",
                        query: currentMovie,
                        abortController: controller
                    }
                )
                   console.log('CAST fethedData', fethedData.data.cast)
                   setCast(fethedData.data.cast)
            }
            catch { if (error.code !== 'ERR_CANCELED') { setError(true) } }
            finally { }
        }
        fetchDataCast();
        return () => { controller.abort() }
    }, [currentMovie])

    return (
    <div>
        {cast && <MovieCastList items={cast}/>}
    </div>    
    )
}


export default MovieCast