import React from 'react';
import './Header.css';

const Header = ({ genres, selectedGenre, onGenreChange }) => {
  return (
    <div className="header">
      <h1>Genres {'>'} {selectedGenre}</h1>
      <div className="genres">
        {genres.map((genre) => (
          <span key={genre} onClick={() => onGenreChange(genre)}>
            {genre}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Header;
