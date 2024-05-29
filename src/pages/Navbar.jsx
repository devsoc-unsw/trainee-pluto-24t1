import React from 'react';
import { Link } from 'react-router-dom';
import "../Styles/Navbar.css";


const Navbar = () => {
  return (
    <div>
        <div className='navbar'>
            <div className='middle'>
                <Link to="/"> Home </Link>
                <Link to="/recommended/action"> Recommended </Link>
                <Link to="/rate"> Rate </Link>
                <Link to="/allmovies"> Movies </Link>
            </div>
        </div>
  </div>
  )
}

export default Navbar
