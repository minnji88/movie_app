import React from "react";
import { Link } from "react-router-dom";
import './Navigation.css'

function Navigation(){
    return (
    <div>
        <header>
            <ul class="menu-bar">
                <li><Link to="/about" className="link">About</Link></li>
                <li><Link to="/" className="link">Watch Now</Link></li>
                <li>Movies</li>
                <li>TV Shows</li>
                <li>Sports</li>
                <li>Kids</li>
            </ul>
        </header>
  </div>
  );
}

export default Navigation;