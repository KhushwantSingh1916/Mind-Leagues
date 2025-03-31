import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import Webcam from "react-webcam";

const NameFaceEntry = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [name, setName] = useState("");
  const [image, setImage] = useState(null);
  const [useDefault, setUseDefault] = useState(false);
  const [showOptions, setShowOptions] = useState(false);
  const [useWebcam, setUseWebcam] = useState(false);
  const path = new URLSearchParams(location.search).get("path");
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
    }
  };

  const proceedToGame = () => {
    if (!name.trim()) return;
    navigate(`/game?path=${path}&name=${name}&image=${useDefault ? "default" : image}`);
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gradient-to-b from-gray-900 to-black text-white p-6">
      <motion.h1 
        className="text-4xl font-bold mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Enter Your Name & Face
      </motion.h1>
      
      <input
        type="text"
        placeholder="Enter your name"
        className="w-64 p-3 mb-4 text-black rounded font-bold bg-white"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <div className="flex space-x-6 mb-6">
        {/* Face Selection Options */}
        <div className="w-40 h-40 bg-gray-700 rounded-lg flex items-center justify-center relative cursor-pointer" onClick={() => setShowOptions(true)}>
          {image ? (
            <img src={image} alt="Captured" className="w-full h-full object-cover rounded-lg" />
          ) : (
            <span className="text-xl">📷 Click to choose</span>
          )}
        </div>
        
        {/* Default Avatar Selection */}
        <div className="w-40 h-40 bg-gray-700 rounded-lg flex items-center justify-center cursor-pointer" onClick={() => {
          setUseDefault(true);
          setImage(null);
        }}>
          <span className="text-6xl">{path === "cricket" ? "🏏" : "🏸"}</span>
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
        <div className="w-40 h-40 bg-gray-700 rounded-lg flex items-center justify-center relative">
          <Webcam ref={webcamRef} screenshotFormat="image/png" className="w-full h-full rounded-lg" />
          <button onClick={captureImage} className="absolute bottom-2 bg-blue-500 px-3 py-1 rounded-md text-sm">
            📸 Capture
          </button>
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

export default NameFaceEntry;
