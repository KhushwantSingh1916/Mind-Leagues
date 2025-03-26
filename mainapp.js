import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FirstPage from './firsstpage';
import CreateGame from './create-game';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<FirstPage />} />
        <Route path="/create-game" element={<CreateGame />} />
        <Route path="/join-game" element={<JoinGame />} />
      </Routes>
    </Router>
  );
}