import React from 'react';
import { Link } from 'react-router-dom';
import "../Styles/Navbar.css";


const Navbar = () => {
  return (
    <div>
        <div className='navbar'>
            <div className='left'>
            Team Pluto 🌑
            </div>
            <div className='middle'>
                <Link to="/home"> Home </Link>
                <Link to="/recommended/action"> Recommended </Link>
                <Link to="/rate"> Rate </Link>
                {/* <Link to="/allmovies"> Movies </Link> */}
            </div>
            <div className='right'>
            Team Pluto 🌑
            </div>
        </div>
  </div>
  )
}

export default Navbar
