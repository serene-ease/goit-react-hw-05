///////Библиотеки///////
import { Suspense, lazy } from 'react'
import { Route, Routes } from 'react-router-dom'
///////Компоненты///////

//////////pages//////////
const HomePage = lazy(() => import("../../pages/HomePage/HomePage.jsx"))
const MoviesPage = lazy(() => import("../../pages/MoviesPage/MoviesPage.jsx"))
const CurrentMovie = lazy(() => import("../../pages/CurrentMovie/CurrentMovie.jsx"))
const NotFoundPage = lazy(() => import("../../pages/NotFoundPage/NotFoundPage.jsx"))
//////////Outlets////////
const MovieReviews = lazy(() => import("../MovieReviews/MovieReviews.jsx"))
const MovieCast = lazy(() => import("../MovieCast/MovieCast.jsx"))
//////////Стили/////////
import style from './App.module.css'
///////^Импорты^////////

const App = () => {


  return (
    <div className={style.mainContainer}>

      <Suspense fallback={<b>Loading...</b>}>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/movies' element={<MoviesPage />} />
          <Route path='/movies/:currentMovie' element={<CurrentMovie />}>
            <Route path='cast' element={<MovieCast />} />
            <Route path='reviews' element={<MovieReviews />} />
          </Route>
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </div>
  )
}

export default App