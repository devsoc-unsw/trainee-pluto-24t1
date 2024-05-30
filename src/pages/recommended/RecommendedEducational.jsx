import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../../Styles/recommended/RecommendedEducational.css';

const RecommendedEducational = () => {
  const [input, setInput] = useState('');
  const requiredPhrase = "I am sorry, I will not watch educational movies";

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handlePaste = (e) => {
    e.preventDefault();
  };

  const handleCopy = (e) => {
    e.preventDefault();
  };

  const disableBackButton = () => {
    window.history.pushState(null, null, window.location.href);
    window.addEventListener('popstate', function () {
      window.history.pushState(null, null, window.location.href);
    });
  };

  useEffect(() => {
    disableBackButton();

    return () => {
      window.removeEventListener('popstate', disableBackButton);
    };
  }, []);

  return (
    <div className='educational'>
      <div className='content-container'>
        <div className='no'>
          💨 Navbar is gone 💨 & 🚫 Copy and paste has been disabled also back button does not work 🚫
        </div>
        <div className='question'>
          Who the f**k watches educational movies!?!?!?!
        </div>
        <div className='type'>
          Type "I am sorry, I will not watch educational movies" to leave the page  
        </div>
        <div className='input-container'>
          <input 
            type="text" 
            value={input}
            onChange={handleChange}
            onPaste={handlePaste}
            onCopy={handleCopy}
            placeholder='say sorry right now!!!'
            className="input-field"
          />
          {input === requiredPhrase && (
            <div className="back-home">
              <Link to="/">☝🤓</Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default RecommendedEducational;
