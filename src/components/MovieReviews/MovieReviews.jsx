import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import fetchData from '../../assets/api';

const MovieReviews = () => {
    const { currentMovie } = useParams();
    const [review, setReview] = useState([]);
    const [error, setError] = useState(false);

    useEffect(() => {
        const controller = new AbortController();

        async function fetchDataCast() {
            try {
                const fethedData = await fetchData(
                    {
                        queryType: "reviews",
                        query: currentMovie,
                        abortController: controller
                    }
                )
                   console.log('Reviews fethedData', fethedData.data.results)
                setReview(fethedData.data.results)
            }
            catch { if (error.code !== 'ERR_CANCELED') { setError(true) } }
            finally { }
        }
        fetchDataCast();
        return () => { controller.abort() }
    }, [currentMovie])

    return (<ul >
        {review && review.map(item => (
            <li key={item.id} >
                <p>{item.author}</p>
                <p>{item.content}</p>
            </li>
        ))}
    </ul>)
}

export default MovieReviews