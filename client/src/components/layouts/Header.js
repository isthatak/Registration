import React from "react";
import {Link,NavLink} from "react-router-dom";

const Header = () =>
{
    return(
        <header>
            <nav className="navbar navbar-dark bg-dark">
                <div className="container">
                <Link to="/" className="navbar-brand">
                    Auth-App
                </Link>
                <ul className="navbar-nav">
                    <li className="navbar-item">
                        <NavLink to="/register" className="nav-link">Register</NavLink>
                    </li>
                </ul>
                </div>
            </nav>
            </header>

        
    )
}

export default Header;