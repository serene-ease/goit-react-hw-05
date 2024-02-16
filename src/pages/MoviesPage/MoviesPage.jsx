import { useState, useEffect, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';

import fetchData from '../../assets/api'
import Header from '../../components/Header/Header'
import SearchBar from '../../components/SearchBar/SearchBar'

const MoviesPage = () => {
   //////////////////////////////////
   
   const [movies, setMovies] = useState ([])
   const [page, setPage] = useState(1);


   const [searchParams, setSearchParams] = useSearchParams();
   const callMovie = searchParams.get('query') ?? '';
//    console.log('searchParams', searchParams)
  
   useEffect(() => {
       const controller = new AbortController();
       if (callMovie === '') return

       async function fetchDataR() {
           try {
               const fethedData = await fetchData(
                   {
                       queryType: "movies",
                       query: callMovie,
                       page: page,
                       abortController: controller
                   }                   
               )
               console.log('callMovie', callMovie.data)
            //    setMovies(prevMovies => [...prevMovies, ...fethedData.data.results])
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
   }, [callMovie])

   const onSubmit = (query) => {
    
    setMovies([]);
    setPage(1);
    setSearchParams({query: query})
   }

    return (
        <div>
            <p>MoviesPage</p>
            <Header />
            <SearchBar onSubmit={onSubmit} value={callMovie}/>
            
        </div>
    )
}


export default MoviesPage