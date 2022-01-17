import "./Navbar.css"
import { Link } from "react-router-dom";


const Navbar = () => {
    return (  
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/contacto">contacto</Link>
                    </li>
                    </ul>
                </div>
                </div>
        </nav>


    );
}
 
export default Navbar;