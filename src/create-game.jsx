import React, { useState } from "react";
import { Button } from "./components/ui/button";
import { motion } from "framer-motion";

const CreateGame = () => {
  const [questions, setQuestions] = useState([]);
  const [newQuestion, setNewQuestion] = useState("");
  const [options, setOptions] = useState(["", "", "", ""]);
  const [correctAnswer, setCorrectAnswer] = useState(null);
  const [difficulty, setDifficulty] = useState("Easy");

  const addQuestion = () => {
    if (!newQuestion.trim() || correctAnswer === null) return;
    setQuestions([...questions, { question: newQuestion, options, correctAnswer, difficulty }]);
    setNewQuestion("");
    setOptions(["", "", "", ""]);
    setCorrectAnswer(null);
    setDifficulty("Easy");
  };

  const deleteQuestion = (indexToDelete) => {
    setQuestions(questions.filter((_, index) => index !== indexToDelete));
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-purple-900 to-black text-white p-6">
      <motion.h1 
        className="text-4xl font-bold mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Create Your Game 🎯
      </motion.h1>

      <div className="w-full max-w-2xl bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col">
        {/* Questions List */}
        <div className="mb-6" style={{ maxHeight: questions.length > 0 ? "40vh" : "0", overflow: "auto" }}>
          {questions.map((q, idx) => (
            <motion.div 
              key={idx} 
              className="bg-gray-700 p-4 rounded mb-3 relative"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Button 
                onClick={() => deleteQuestion(idx)} 
                className="absolute top-2 right-2 bg-red-500 hover:bg-red-600 text-white p-1.5 rounded-full transform transition-all hover:scale-110"
              >
                <span className="emoji-white">❌</span>
              </Button>
              <p className="font-bold pr-8">{q.question}</p>
              <ul className="list-disc pl-5 mt-2">
                {q.options.map((opt, i) => (
                  <li key={i} className={q.correctAnswer === i ? "text-green-400" : "text-white"}>
                    {opt}
                  </li>
                ))}
              </ul>
              <p className={`text-sm mt-2 ${
                q.difficulty === "Easy"
                  ? "text-green-400"
                  : q.difficulty === "Medium"
                  ? "text-yellow-400"
                  : "text-red-400"
              }`}>
                Difficulty: {q.difficulty}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Form Section */}
        <div className="space-y-4">
          <input
            type="text"
            placeholder="Enter your question"
            className="w-full p-3 text-black rounded font-bold bg-white"
            value={newQuestion}
            onChange={(e) => setNewQuestion(e.target.value)}
          />
          
          <div className="space-y-2">
            {options.map((opt, index) => (
              <div key={index} className="flex items-center space-x-3">
                <input
                  type="text"
                  placeholder={`Option ${index + 1}`}
                  className="flex-1 p-2 text-black rounded bg-white"
                  value={opt}
                  onChange={(e) => {
                    const newOptions = [...options];
                    newOptions[index] = e.target.value;
                    setOptions(newOptions);
                  }}
                />
                <input
                  type="radio"
                  className="w-4 h-4 border-2 border-gray-400 appearance-none checked:bg-green-500 rounded-full"
                  name="correctAnswer"
                  checked={correctAnswer === index}
                  onChange={() => setCorrectAnswer(index)}
                />
              </div>
            ))}
          </div>

          <select
            className="w-full p-3 text-black rounded bg-white"
            value={difficulty}
            onChange={(e) => setDifficulty(e.target.value)}
          >
            <option value="Easy">Easy</option>
            <option value="Medium">Medium</option>
            <option value="Hard">Hard</option>
          </select>

          <Button 
            onClick={addQuestion} 
            className="w-full bg-yellow-500 text-black px-4 py-3 rounded-lg hover:bg-yellow-600 font-bold transition-all duration-200"
          >
            ➕ Add Question
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CreateGame;