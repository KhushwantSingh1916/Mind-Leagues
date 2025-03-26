import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import FirstPage from './firsstpage.jsx';
import CreateGame from './create-game.jsx';
import './index.css';

const root = document.getElementById('root');

if (!root) {
  throw new Error('Root element not found');
}

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FirstPage />} />
        <Route path="/create-game" element={<CreateGame />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);