import React from "react";
import { Link } from "react-router-dom";

function Header (){
    return (
<nav className="navbar navbar-expand-lg navbar-light bg-light menu">
      <Link className="navbar-brand" to="/">
        Google Books Search
      </Link>
      <div>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link
              to="/"
              className={
                window.location.pathname === "/" || window.location.pathname === "/about"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Favorites
            </Link>
            </li>
        </ul>
      </div>
 </nav>
    )
}

export default Header