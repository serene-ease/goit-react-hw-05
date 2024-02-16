import style from './MovieItem.module.css'

const MovieItem = ({movie}) => {
    // console.log(movie)
    const defPoster = 'https://images.unsplash.com/photo-1589569334232-fdc917c38226?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NjI3OTV8MHwxfHNlYXJjaHw2MXx8bW92aWV8ZW58MHx8fHwxNzA4MDczMTkyfDA&ixlib=rb-4.0.3&q=80&w=1080';

    return (
        <div>
            <img className={style.card} src={`https://image.tmdb.org/t/p/w500${movie.poster_path}` ?? defPoster}  alt={movie.title} />
            <h1>{`${movie.title}`}</h1>
            <p>{`${movie.overview}`}</p>            
        </div>
    )
}


export default MovieItem