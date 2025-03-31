import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import FirstPage from './firsstpage.jsx';
import CreateGame from './create-game.jsx';
import GameLobby from './game-detail.jsx';
import JoinGame from './join-game.jsx';
import PathSelection from './path-selection.jsx';
import NameFaceEntry from './name-face-entry.jsx';
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
        <Route path="/name-face-entry" element={<NameFaceEntry />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);