import { useEffect, useState } from "react"
import fetchData from '../../../assets/api'
import Header from "../../Header/Header";

const HomePage = () => {
    // const [trendingMovies, setTrendingMovies] = useState(null);
    // const [error, setError] = useState(null);
    // const [spiner, setSpiner] = useState(null);

    // useEffect(() => {
    //     const controller = new AbortController();
    //     // setLoading(true);
    //     // setError(false);

    //     async function fetchDataR() {
    //         try {
    //             const fethedData = await fetchData('',
    //                 { signal: controller.signal })
    //         }
    //         catch { if (error.code !== 'ERR_CANCELED') { setError(true) } }
    //         finally { setSpiner(false) }
    //     }
    //     fetchDataR();
    //     return () => { controller.abort() }
    // }, [])
    
    return (<Header/>)
}

export default HomePage




// useEffect(()=> {
//     async function fetchData = () => {
//         try{
//             const response = await axios.get()
//         }
//         catch (error) {}
//     }
//     fetchData();
// }, [])
// }