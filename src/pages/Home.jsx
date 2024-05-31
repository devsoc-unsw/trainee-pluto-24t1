import React, { useContext, useState } from 'react';
import { NameContext } from '../NameContext';
import '../Styles/Home.css';
import ActionHome from './ActionHome'; 

const Home = () => {
  const { name } = useContext(NameContext);
  const [showSubPage, setShowSubPage] = useState(false);

  const handleButtonClick = () => {
    setShowSubPage(true);
  };

  return (
    <div className='home-container'>
      {!showSubPage ? (
        <div className='text'>
          <h1>👋 Hi, {name}!</h1>
          <h2>Choose a genre you like...</h2>
          <div className='action'>
            <button type="button" className="glow-on-hover" onClick={handleButtonClick}>💥 ACTION</button>
            <button type="button" className='glow-1' onClick={handleButtonClick}>THILLER</button>
            <button type="button" className='glow-2' onClick={handleButtonClick}>ADVENTURE</button>
            <button type="button" className='glow-3' onClick={handleButtonClick}>COMEDY</button>
            <button type="button" className='glow-4' onClick={handleButtonClick}>DRAMA</button>
            <button type="button" className='glow-5' onClick={handleButtonClick}>HORROR</button>
            <button type="button" className='glow-6' onClick={handleButtonClick}>ROMANCE</button>
            <button type="button" className='glow-7' onClick={handleButtonClick}>ANIMATION</button>
            <button type="button" className='glow-8' onClick={handleButtonClick}>ANIME</button>
            <button type="button" className='glow-9' onClick={handleButtonClick}>SCIENCE FICTION</button>
            <button type="button" className='glow-10' onClick={handleButtonClick}>EDUCATIONAL</button>
          </div>
        </div>
      ) : (
        <div className='subpage'>
          <ActionHome />
        </div>
      )}
    </div>
  );
}

export default Home;
