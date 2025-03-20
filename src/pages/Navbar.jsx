import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import "../Styles/Navbar.css";

const Navbar = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownVisible(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleDropdownToggle = (e) => {
    e.preventDefault();  // Prevent the default link behavior
    setDropdownVisible(prev => !prev);
  };

  const handleGenreClick = () => {
    setDropdownVisible(false);
  };

  return (
    <div>
      <div className='navbar'>
        <div className='left'>
          Pluto 🌑
        </div>
        <div className='middle'>
          <Link to="/home"> Home </Link>
          <div className="dropdown" ref={dropdownRef}>
            <a href="#" onClick={handleDropdownToggle}> Recommended </a>
            {dropdownVisible && (
              <div className="dropdown-content">
                <Link to="/recommended/thriller" onClick={handleGenreClick}>Thriller</Link>
                <Link to="/recommended/action" onClick={handleGenreClick}>Action</Link>
                <Link to="/recommended/adventure" onClick={handleGenreClick}>Adventure</Link>
                <Link to="/recommended/comedy" onClick={handleGenreClick}>Comedy</Link>
                <Link to="/recommended/drama" onClick={handleGenreClick}>Drama</Link>
                <Link to="/recommended/horror" onClick={handleGenreClick}>Horror</Link>
                <Link to="/recommended/romance" onClick={handleGenreClick}>Romance</Link>
                <Link to="/recommended/animation" onClick={handleGenreClick}>Animation</Link>
                <Link to="/recommended/anime" onClick={handleGenreClick}>Anime</Link>
                <Link to="/recommended/sciencefiction" onClick={handleGenreClick}>SciFi</Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
