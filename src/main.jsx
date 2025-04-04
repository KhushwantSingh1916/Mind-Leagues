import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import FirstPage from './firsstpage.jsx';
import CreateGame from './create-game.jsx';
import GameLobby from './game-detail.jsx';
import JoinGame from './join-game.jsx';
import PathSelection from './path-selection.jsx';
import CricketEntry from './cricket-entry.jsx';
import BadmintonEntry from './badminton-entry.jsx';
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
        <Route path="/game-details" element={<GameLobby />} />
        <Route path="/join-game" element={<JoinGame />} />
        <Route path="/path-selection" element={<PathSelection />} />
        <Route path="/path-selection/:code" element={<PathSelection />} />
        <Route path="/criket-entry" element={<CricketEntry />} />
        <Route path="/badminton-entry" element={<BadmintonEntry />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);