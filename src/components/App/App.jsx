///////Библиотеки///////
import { Suspense, lazy } from 'react'
import { Route, Routes } from 'react-router-dom'
///////Компоненты///////

//////////Lazy//////////
const HomePage = lazy(() =>  import("../pages/HomePage/HomePage") )
const MoviesPage = lazy(() =>  import("../pages/MoviesPage/MoviesPage.jsx") )
const NotFoundPage = lazy(() =>  import("../pages/NotFoundPage/NotFoundPage.jsx") )
//////////Стили/////////
import style from './App.module.css'
///////^Импорты^////////

const App = () => {

  //// Lazy только код страници, обычные компоненты как обычные компоненты


  //// Suspense для маршрутов, там fallback можно Loader туда впихать
  // return (
  //// On Home - Trending without Serchbar, on Movie - seacrhbar + "Filter"
  //// Reviews & Cast - Outlets
  //// on current backlink

  // )
  return (
    <div className={style.mainContainer}>
      
      <Suspense fallback={<b>Loading...</b>}>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/movies' element={<MoviesPage />} />
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </div>
  )
}

export default App