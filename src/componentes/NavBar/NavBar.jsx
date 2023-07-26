import '../CartWidget/CartWidget'
import { Link, NavLink } from 'react-router-dom'
import '../NavBar/NavBar'
import CartWidget from '../CartWidget/CartWidget'

const NavBar = () => {
  return (
    <header className='barra'>
        <Link to="/">
            <h1>Child care line</h1>
        </Link>

        <nav>
            <ul>
                <li>
                  <NavLink to="/categoria/1">Girl section</NavLink>
                </li>

                <li>
                  <NavLink to="/categoria/2">Child section </NavLink>
                </li>
            </ul>
        </nav>
<CartWidget/>
    </header>
  )
}

export default NavBar