import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const CurrentMovieItem = ({ movie: { title, poster_path, release_date, budget, vote_average, overview, genres } }) => {
    // console.log(title, poster_path, release_date, budget, vote_average, overview, genres);


    const defPoster = 'https://images.unsplash.com/photo-1589569334232-fdc917c38226?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NjI3OTV8MHwxfHNlYXJjaHw2MXx8bW92aWV8ZW58MHx8fHwxNzA4MDczMTkyfDA&ixlib=rb-4.0.3&q=80&w=1080';


    return (
        <div>
            <img src={`https://image.tmdb.org/t/p/w500${poster_path}` ?? defPoster} />
            <div>
                <h2 >{title}</h2>
                <p>Release Date:{release_date}</p>
                <p>Budget:{budget}</p>
                <p>Average score:{vote_average}</p>
                <p>Overview:{overview}</p>
                <ul>
                    <p>Genres:</p>
                    {genres && genres.map(genre => (
                        <li key={genre.id}>
                            {genre.name}
                        </li>
                    ))}
                </ul>
                {/* <div >
                <NavLink to='cast' >Cast</NavLink>
                <NavLink to='reviews' >Reviews</NavLink>
            </div>

            <Suspense fallback={<p>Loading...</p>}>
                <Outlet />
            </Suspense> */}
            </div>
        </div>
    )
}


export default CurrentMovieItem