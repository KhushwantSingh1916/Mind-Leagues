import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const PathSelection = () => {
  const navigate = useNavigate();

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gradient-to-b from-blue-900 to-black text-white p-6">
      <motion.button
            className="absolute top-4 left-4 bg-gray-800 hover:bg-red-600 text-white px-6 py-2 rounded-full flex items-center space-x-2 shadow-lg"
            onClick={() => navigate('/')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Quit</span>
          </motion.button>
      <h1 className="text-4xl font-bold mb-8">Choose Your Path ⚡</h1>
      <div className="flex space-x-12">
        {/* Cricket Path - Bat Emoji */}
        <motion.div
          className="w-96 h-96 flex flex-col items-center justify-center rounded-full shadow-lg cursor-pointer hover:scale-110 bg-green-500 border-4 border-yellow-300"
          onClick={() => navigate("/criket-entry?path=cricket")}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.9 }}
        >
          <span className="text-8xl">🏏</span>
          <p className="mt-4 text-3xl font-bold">Cricket</p>
        </motion.div>

        {/* Badminton Path - Racket Emoji */}
        <motion.div
          className="w-96 h-96 flex flex-col items-center justify-center rounded-full shadow-lg cursor-pointer hover:scale-110 bg-yellow-500 border-4 border-green-300"
          onClick={() => navigate("/badminton-entry?path=badminton")}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.9 }}
        >
          <span className="text-8xl">🏸</span>
          <p className="mt-4 text-3xl font-bold">Badminton</p>
        </motion.div>
      </div>
    </div>
  );
};

export default PathSelection;
