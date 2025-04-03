import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "./components/ui/button";

const JoinGame = () => {
  const [gameCode, setGameCode] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleJoinGame = () => {
    if (!gameCode.trim()) return;
    setLoading(true);
    setTimeout(() => {
      navigate(`/path-selection?code=${gameCode}`);
    }, 2000);
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gradient-to-b from-blue-900 to-black text-white p-6">
      <motion.button
      className="absolute top-4 left-4 bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-full flex items-center space-x-2 shadow-lg"
      onClick={() => navigate('/')}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      >
      <span className="text-xl">←</span>
      <span>Back</span>
      </motion.button>
      <motion.h1 
        className="text-4xl font-bold mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Join a Game 👥
      </motion.h1>

      <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-md text-center">
        <input
          type="text"
          className="w-full p-3 text-black rounded bg-white"
          placeholder="Enter Game Code"
          value={gameCode}
          onChange={(e) => setGameCode(e.target.value)}
        />
        
        <Button
          onClick={handleJoinGame}
          className="w-full mt-4 bg-green-500 px-4 py-3 rounded-lg hover:bg-green-600 font-bold"
        >
          {loading ? "Joining... ⏳" : "Join Game 🎮"}
        </Button>
      </div>
    </div>
  );
};

export default JoinGame;
