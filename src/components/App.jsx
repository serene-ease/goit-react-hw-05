///////Библиотеки///////
import { Suspense, lazy, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
//////////pages//////////
const HomePage = lazy(() => import("../pages/HomePage/HomePage"));
const MovieDetailsPage = lazy(() => import("../pages/MovieDetailsPage/MovieDetailsPage"));
const ActorsPage = lazy(() => import("../pages/ActorsPage/ActorsPage"));
const NotFoundPage = lazy(() => import("../pages/NotFoundPage/NotFoundPage"));
//////////Outlets////////
const MovieCast = lazy(() => import("./MovieCast"));
const MovieReviews = lazy(() => import("./MovieReviews"));
//////////Стили/////////

///////^Импорты^////////

const App = () => {
  const initialSettings = {
    user: 'guest',
    lang: 'en-US',
    theme: 'light'
  }
  const [settings, setSettings] = useState(initialSettings)

  return (
    <div>
      <Suspense fallback={<b>Loading...</b>}>
        <Routes>
          <Route path='/' element={<HomePage settings={settings} />} />
          <Route path='/:currentMovie' element={<MovieDetailsPage settings={settings} />}>
            <Route path='cast' element={<MovieCast settings={settings} />} />
            <Route path='reviews' element={<MovieReviews settings={settings} />} />
          </Route>
          <Route path='/actors' element={<ActorsPage settings={settings} />} />
          <Route path='*' element={<NotFoundPage settings={settings} />} />
        </Routes>
      </Suspense>
    </div>
  )
}

export default App