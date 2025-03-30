import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "./components/ui/button";

const GameLobby = ({ gameLink, gameCode }) => {
  const [leaderboard, setLeaderboard] = useState({ cricket: [], badminton: [] });

  useEffect(() => {
    // Simulating real-time updates
    const interval = setInterval(() => {
      setLeaderboard({
        cricket: [
          { name: "Player 1", runs: Math.floor(Math.random() * 50) },
          { name: "Player 2", runs: Math.floor(Math.random() * 50) },
          { name: "Player 3", runs: Math.floor(Math.random() * 50) },
        ],
        badminton: [
          { name: "Player A", points: Math.floor(Math.random() * 50) },
          { name: "Player B", points: Math.floor(Math.random() * 50) },
          { name: "Player C", points: Math.floor(Math.random() * 50) },
        ],
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gradient-to-b from-blue-900 to-black text-white p-6">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center"
      >
        <h1 className="text-4xl font-bold mb-6">Game Lobby 🚀</h1>
        <p className="text-lg">Game Link: <a href={gameLink} className="underline text-blue-400">{gameLink}</a></p>
        <p className="text-lg mt-2">Game Code: <span className="font-bold text-yellow-400">{gameCode}</span></p>
      </motion.div>
      
      <div className="mt-6 bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-lg">
        <h2 className="text-2xl font-bold mb-4">Live Leaderboard</h2>
        <div className="flex justify-between">
          <div className="w-1/2 pr-2">
            <h3 className="text-lg font-semibold">🏏 Cricket</h3>
            <ul className="list-decimal pl-5">
              {leaderboard.cricket.map((player, index) => (
                <li key={index}>{player.name} - {player.runs} runs</li>
              ))}
            </ul>
          </div>
          <div className="w-1/2 pl-2">
            <h3 className="text-lg font-semibold">🏸 Badminton</h3>
            <ul className="list-decimal pl-5">
              {leaderboard.badminton.map((player, index) => (
                <li key={index}>{player.name} - {player.points} points</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <Button className="mt-6 bg-green-500 px-4 py-2 rounded-lg hover:bg-green-600">
        Start Game 🎮
      </Button>
    </div>
  );
};

export default GameLobby;
