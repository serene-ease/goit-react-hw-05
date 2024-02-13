import { Link } from "react-router-dom"

const BackLink = ({prevPage}) => {

    return (
        <Link>Go to {prevPage}</Link>
    )
}


export default BackLink