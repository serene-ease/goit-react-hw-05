///////Библиотеки///////
import { Suspense } from 'react'
///////Компоненты///////
import Header from '../Header/Header'

//////////Стили/////////


///////^Импорты^////////

const App = () => {
 
//// Lazy только код страници, обычные компоненты как обычные компоненты
  const TrendingMoves = lazy( () => {import("../pages/TrendingMovies/TrendingMovies")})

  //// Suspense для маршрутов, там fallback можно Loader туда впихать
  // return (
 //// On Home - Trending without Serchbar, on Movie - seacrhbar + "Filter"
 //// Reviews & Cast - Outlets
 //// on current backlink
 
  // )
}

export default App