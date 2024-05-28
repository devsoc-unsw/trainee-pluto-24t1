import React, { useState, useEffect } from 'react';
import { actionMovies } from '../images/recommended/action'; 
import '../Styles/RecommendedMoviesPage.css';

const RecommendedMoviesPage = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const imagesPerPage = 3;

  const showSlides = (index) => {
    const maxIndex = Math.ceil(actionMovies.length / imagesPerPage) - 1;
    if (index > maxIndex) {
      setSlideIndex(0);
    } else if (index < 0) {
      setSlideIndex(maxIndex);
    } else {
      setSlideIndex(index);
    }
  };

  const nextSlide = () => {
    showSlides(slideIndex + 1);
  };

  const prevSlide = () => {
    showSlides(slideIndex - 1);
  };

  useEffect(() => {
    const slides = document.querySelector('.slides');
    slides.style.transform = `translateX(${-slideIndex * 100}%)`;
  }, [slideIndex]);

  return (
    <div className='Recommended-page'>
      <div className='title'>
        - Recommendations -
      </div>
      <div className='genre'>
        Action 💥
      </div>
      <div className="slider">
        <div className="slides">
          {actionMovies.map((movie, index) => (
            <div key={index} className="slide">
              <div className="rank">{movie.rank}</div>
              <img src={movie.image} alt={movie.name} />
              <div className="movie-info">
                <h3>{movie.name}</h3>
                <p><strong>Rating: ⭐</strong> {movie.rating}</p>
                <p><strong>Director: 🎬</strong> {movie.director}</p>
                <p><strong>Stars: 🎥</strong> {movie.stars}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="arrow prev" onClick={prevSlide}>
          <div className="arrow-top"></div>
          <div className="arrow-bottom"></div>
        </div>
        <div className="arrow next" onClick={nextSlide}>
          <div className="arrow-top"></div>
          <div className="arrow-bottom"></div>
        </div>
      </div>
    </div>
  );
};

export default RecommendedMoviesPage;
