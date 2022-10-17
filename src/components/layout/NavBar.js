import Widget from "../widgets/CartWidget";
import { NavLink } from "react-router-dom"
import DarkMode from "../DarkMode";

function Header() {

    return (
        <header className="nav-container">
            <NavLink to="/shop"><h3>SHIRTY</h3></NavLink>
            <nav className="links-container">
                <ul>
                    <li>
                        <p>Ropa</p>
                        <ul className="list-option">
                            <li><NavLink to="categoria/men's clothing" className="list-option">Hombre</NavLink></li>
                            <li><NavLink to="categoria/women's clothing" className="list-option">Mujer</NavLink></li>
                        </ul>
                    </li>
                </ul>
                <NavLink to="accesorios/jewelery" className="nav-link">Joyeria</NavLink>
                <NavLink to="accesorios/electronics" className="nav-link">Electrónica</NavLink>

                <NavLink to="cart"><Widget /></NavLink>
                <DarkMode />
            </nav>
        </header>
    )
}

export default Header;