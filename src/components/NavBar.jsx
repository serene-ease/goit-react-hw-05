import {NavLink} from 'react-router-dom'

const NavBar = () => {
    return (
        <nav>
            <ul>
                <li>
                    <NavLink to='/'>Home</NavLink>
                </li>
                <li>
                    <NavLink to='/actors'>Actors</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar