import { Route, Routes } from 'react-router-dom'
import LandingPage from './pages/LandingPage';
import RecommendedMoviesPage from './pages/RecommendedMoviesPage';
import RateMoviePage from './pages/RateMoviePage';
import AllMoviesPage from './pages/AllMoviesPage';
import Navbar from './pages/Navbar';
import './App.css';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/recommended" element={<RecommendedMoviesPage />} />
        <Route path="/rate" element={<RateMoviePage />} />
        <Route path="/allmovies" element={<AllMoviesPage />} />
      </Routes>
    </div>
  );
}

export default App;
