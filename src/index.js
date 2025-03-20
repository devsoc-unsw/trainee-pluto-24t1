import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.js';
import './index.css';
import { HashRouter } from 'react-router-dom';
import { NameProvider } from './NameContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
      <NameProvider>
        <App />
      </NameProvider>
    </HashRouter>
  </React.StrictMode>,
);
