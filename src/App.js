import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import LandingPage from './pages/LandingPage/LandingPage';
import RateMoviePage from './pages/RateMoviePage/RateMoviePage';
import RecommendedMoviesPage from './pages/recommended/RecommendedAction';
import AllMoviesPage from './pages/AllMoviesPage';
import Navbar from './pages/Navbar';
import Footer from './pages/Footer'
import Thriller from './pages/recommended/RecommendedThriller';
import Adventure from './pages/recommended/RecommendedAdventure';
import Comedy from './pages/recommended/RecommendedComedy';
import Drama from './pages/recommended/RecommendedDrama';
import Horror from './pages/recommended/RecommendedHorror';
import Romance from './pages/recommended/RecommendedRomance';
import Animation from './pages/recommended/RecommendedAnimation';
import Anime from './pages/recommended/RecommendedAnime';
import Education from './pages/recommended/RecommendedEducational';
import ScienceFiction from './pages/recommended/RecommendedScienceFiction';
import './App.css';

function App() {
  const location = useLocation();
  const showNavbar = location.pathname !== '/recommended/education';

  return (
    <div>
      {showNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/recommended/action" element={<RecommendedMoviesPage />} />
        <Route path="/rate" element={<RateMoviePage />} />
        <Route path="/allmovies" element={<AllMoviesPage />} />
        <Route path="/recommended/thriller" element={<Thriller/>} />
        <Route path="/recommended/adventure" element={<Adventure/>} />
        <Route path="/recommended/comedy" element={<Comedy/>} />
        <Route path="/recommended/drama" element={<Drama/>} />
        <Route path="/recommended/horror" element={<Horror/>} />
        <Route path="/recommended/education" element={<Education/>} />
        <Route path="/recommended/romance" element={<Romance/>} />
        <Route path="/recommended/animation" element={<Animation/>} />
        <Route path="/recommended/anime" element={<Anime/>} />
        <Route path="/recommended/sciencefiction" element={<ScienceFiction/>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
