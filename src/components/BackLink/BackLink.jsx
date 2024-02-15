import { Link } from "react-router-dom"

const BackLink = ({prevPage}) => {

    return (
        <Link to={location.state ?? 'movies/'}>Go to {prevPage}</Link>
    )
}


export default BackLink