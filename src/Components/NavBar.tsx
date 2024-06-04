import {Link} from "react-router-dom";
import './NavBar.css'

export const NavBar = ()=>{
    return(
        <nav>
            <h1>Bienvenue dans l'application de triche pour keep talking and nobody explodes</h1>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to="/button"> Module Bouton</Link></li>
                <li><Link to="/wire"> Module Fil</Link></li>
            </ul>
        </nav>
    )
}
