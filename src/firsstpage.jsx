import React from "react";
import { Link } from "react-router-dom";
import { Button } from "./components/ui/button";
import { motion } from "framer-motion";

const FirstPage = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center bg-gradient-to-b from-blue-900 to-black text-white text-center">
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
