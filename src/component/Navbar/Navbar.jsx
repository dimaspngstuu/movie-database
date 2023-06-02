import React from 'react'

import { Link } from 'react-router-dom'
import StyledNavbar from './StyledNavbar'

const Navbar = () => {
  return (
    <StyledNavbar>
        <nav className="navbar">
            <div className="navbar__brand">
                <h2>Movie App</h2>
            </div>
            <div>
                <ul className="navbar__list">
                    <li className="navbar__item">
                        <Link to= "/">Home</Link>
                    </li>
                    <li className="navbar__item">
                        <Link to= "/movie/create">Add Movie</Link>
                    </li>
                    <li className="navbar__item">
                        <Link to= "/movie/popular">Popular</Link>
                    </li>
                    <li className="navbar__item">
                        <Link to= "/movie/now">New Playing</Link>
                    </li>
                    <li className="navbar__item">
                        <Link to= "/movie/top">Top Rated</Link>
                    </li>
                </ul>
            </div>
        </nav>
    </StyledNavbar>

  )
}

export default Navbar