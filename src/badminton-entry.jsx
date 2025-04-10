import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import Webcam from "react-webcam";

const BadmintonEntry = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [name, setName] = useState("");
  const [image, setImage] = useState(null);
  const [useDefault, setUseDefault] = useState(false);
  const [showOptions, setShowOptions] = useState(false);
  const [useWebcam, setUseWebcam] = useState(false);
  const webcamRef = React.useRef(null);

  const captureImage = () => {
    const imgSrc = webcamRef.current.getScreenshot();
    setImage(imgSrc);
    setUseDefault(false);
    setUseWebcam(false);
  };

  const handleUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => setImage(e.target.result);
      reader.readAsDataURL(file);
      setUseDefault(false);
      setUseWebcam(false);
    }
  };

  const proceedToGame = () => {
    if (!name.trim()) return;
    navigate(`/game?path=${path}&name=${name}&image=${useDefault ? "default" : image}`);
  };

  return (
    <div className="h-screen flex flex-col items-center bg-gradient-to-b from-gray-900 to-black text-white p-16" style={{ backgroundImage: "url('/static/badminton.png')", backgroundPosition: "75% center" }}>
      <motion.button
                  className="absolute top-4 left-4 bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-full flex items-center space-x-2 shadow-lg"
                  onClick={() => navigate('/path-selection')}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="text-xl">←</span>
                  <span>Back</span>
      </motion.button>
      
      <motion.h1 
        className="text-4xl font-bold mb-20"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Let's Get Ready to Play!
      </motion.h1>
      
      <input
        type="text"
        placeholder="Enter your name"
        className="w-72 p-2 mb-10 text-black rounded font-bold bg-white"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <div className="flex space-x-10 mb-6">
        {/* Face Selection Options */}
        <div className="w-56 h-56 bg-gray-700 border-4 border-green-300 rounded-full flex items-center relative justify-center cursor-pointer hover:scale-105" onClick={() => setShowOptions(true)}>
          {image ? (
            <img src={image} alt="Captured" className="w-full h-full object-cover rounded-full" />
          ) : (
            <span className=" pb-7 text-8xl">📷</span>
          )}
        </div>
        
        {/* Default Avatar Selection */}
        <div className="w-56 h-56 bg-gray-700 border-4 border-green-300 rounded-full flex items-center justify-center cursor-pointer hover:scale-105" onClick={() => {
          setUseDefault(true);
          setImage(null);
        }}>
          <span className="text-8xl">☺️</span>
        </div>
      </div>
      
      {showOptions && (
        <div className="flex space-x-4 mb-6">
          <button onClick={() => { setUseWebcam(true); setShowOptions(false); }} className="bg-blue-500 px-4 py-2 rounded-lg">📷 Take Photo</button>
          <label className="bg-gray-500 px-4 py-2 rounded-lg cursor-pointer">
            📂 Upload
            <input type="file" accept="image/*" onChange={handleUpload} className="hidden" />
          </label>
        </div>
      )}

      {useWebcam && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-gray-800 p-4 rounded-lg">
            <Webcam ref={webcamRef} screenshotFormat="image/png" className="w-full h-full rounded-lg" />
            <div className="flex justify-between mt-2">
              <button onClick={captureImage} className="bg-blue-500 px-3 py-1 rounded-md text-sm">📸 Capture</button>
              <button onClick={() => setUseWebcam(false)} className="bg-red-500 px-3 py-1 rounded-md text-sm text-cyan-100">❌ Close</button>
            </div>
          </div>
        </div>
      )}

      <button
        onClick={proceedToGame}
        className="bg-green-500 text-black px-6 py-3 rounded-lg font-bold hover:bg-green-600 transition-all"
      >
        🎮 Start Game
      </button>
    </div>
  );
};

export default BadmintonEntry;
