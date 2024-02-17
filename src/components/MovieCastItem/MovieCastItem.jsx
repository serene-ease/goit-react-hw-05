const MovieCastItem = ({ item: { name, character, profile_path } }) => {
    const defaultImg = 'https://images.unsplash.com/photo-1549497538-303791108f95?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NjI3OTV8MHwxfHNlYXJjaHw5fHxhY3RvcnxlbnwwfHx8fDE3MDgxNDYxNTF8MA&ixlib=rb-4.0.3&q=80&w=400';

    return (
        <div >
            <img src={profile_path ? `https://image.tmdb.org/t/p/w500${profile_path}` : defaultImg} />
            <p >{name}</p>
            <p >{character}</p>
        </div>
    )

}

export default MovieCastItem