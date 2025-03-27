import React from "react";
import { Link } from "react-router-dom";
import { Button } from "./components/ui/button";
import { motion } from "framer-motion";

const SportIcon = ({ emoji, rotation, position }) => (
  <motion.div
    className="absolute sports-emoji text-4xl transform-gpu"
    style={{ ...position }}
    animate={{
      rotate: rotation,
      scale: [1, 1.2, 1],
    }}
    transition={{
      duration: 10,
      repeat: Infinity,
      ease: "easeInOut"
    }}
  >
    {emoji}
  </motion.div>
);
const FirstPage = () => {
  const sportsIcons = [
    { emoji: "🏀", rotation: 360, position: { top: "10%", left: "10%" } },
    { emoji: "⚽", rotation: -360, position: { top: "5%", right: "25%" } },
    { emoji: "🏏", rotation: 360, position: { bottom: "10%", left: "10%" } },
    { emoji: "🏸", rotation: -360, position: { top: "15%", left: "40%" } },
    { emoji: "🥊", rotation: 360, position: { bottom: "15%", right: "20%" } },
    { emoji: "🎾", rotation: -360, position: { top: "40%", right: "10%" } },
    { emoji: "🏓", rotation: -360, position: { bottom: "40%", left: "30%" } },
  ];
  return (
    <div className="h-screen flex flex-col justify-center items-center bg-gradient-to-b from-blue-900 to-black text-white text-center">
         {/* Sports Icons */}
         {sportsIcons.map((icon, index) => (
        <SportIcon key={index} {...icon} />
      ))}
      {/* Title */}
      <motion.h1 
        className="text-5xl font-bold mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
      🔥Enter the Arena🔥
      </motion.h1>
      
      {/* Buttons */}
      <div className="space-y-4">
        <motion.div whileHover={{ scale: 1.1 }}>
          <Link to="/create-game">
            <Button className="bg-yellow-500 text-black px-6 py-3 text-xl font-bold rounded-2xl shadow-lg hover:bg-yellow-600">
              🎮 Create Game
            </Button>
          </Link>
        </motion.div>
        
        <motion.div whileHover={{ scale: 1.1 }}>
          <Link to="/join-game">
            <Button className="bg-green-500 text-black px-6 py-3 text-xl font-bold rounded-2xl shadow-lg hover:bg-green-600">
              👥 Join Game
            </Button>
          </Link>
        </motion.div>
      </div>
      
      {/* Animated Background Elements */}
      <motion.div
        className="absolute bottom-10 text-gray-400 text-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        Feel the stadium roar! ⚡
      </motion.div>
    </div>
  );
};

export default FirstPage;
