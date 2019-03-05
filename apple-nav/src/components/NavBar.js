import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = props => {
    console.log("navbar props", props);
    return (
        <div className="nav-bar">
            <Link className="main-link" to={`/mac`}>Mac</Link>
            <Link className="main-link" to={`/ipad`}>iPad</Link>
            <Link className="main-link" to={`/iphone`}>iPhone</Link>
            <Link className="main-link" to={`/watch`}>Watch</Link>
            <Link className="main-link" to={`/tv`}>TV</Link>
            <Link className="main-link" to={`/music`}>Music</Link>
        </div>
    )
}

export default NavBar;