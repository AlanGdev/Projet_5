import { Link } from "react-router-dom";
import './Navbar.css'
function Navbar(){
    return(
        <nav className="navbar">
            <Link to="/" className="navbar__link">Accueil</Link>
            <Link to="/Apropos" className="navbar__link">À Propos</Link>
            </nav>
    )
}
export default Navbar