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

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gradient-to-b from-purple-900 to-black text-white p-6 ">
      <motion.h1 
        className="text-4xl font-bold mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Create Your Game 🎯
      </motion.h1>

      <div className="w-full max-w-2xl bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col" style={{ height: "80vh" }}>
      <div className="flex-1 overflow-y-auto mb-4">
        {questions.map((q, idx) => (
          <div key={idx} className="bg-gray-700 p-4 rounded mb-3">
            <p className="font-bold">{q.question}</p>
            <ul className="list-disc pl-5">
              {q.options.map((opt, i) => (
                <li key={i} className={q.correctAnswer === i ? "text-green-400" : "text-white"}>{opt}</li>
              ))}
            </ul>
            <p
              className={`text-sm ${
                q.difficulty === "Easy"
                  ? "text-green-400"
                  : q.difficulty === "Medium"
                  ? "text-yellow-400"
                  : "text-red-400"
              }`}
            >
              Difficulty: {q.difficulty}
            </p>
          </div>
        ))}
      </div>

        <input
          type="text"
          placeholder="Enter your question"
          className="w-full p-2 mb-3 text-black rounded font-bold"
          value={newQuestion}
          onChange={(e) => setNewQuestion(e.target.value)}
        />
        {options.map((opt, index) => (
          <div key={index} className="flex items-center space-x-2 mb-2">
            <input
              type="text"
              placeholder={`Option ${index + 1}`}
              className="w-9/12 p-2 text-black rounded"
              value={opt}
              onChange={(e) => {
                let newOptions = [...options];
                newOptions[index] = e.target.value;
                setOptions(newOptions);
              }}
            />
            <input
              type="radio"
              className="w-3 h-3 p-1 border border-gray-600 appearance-none checked:bg-green-500"
              name="correctAnswer"
              checked={correctAnswer === index}
              onChange={() => setCorrectAnswer(index)}
              style={{ borderRadius: "0" }}
            />
          </div>
        ))}
        
        <select
          className="w-full p-2 my-3 text-black rounded"
          value={difficulty}
          onChange={(e) => setDifficulty(e.target.value)}
        >
          <option value="Easy">Easy</option>
          <option value="Medium">Medium</option>
          <option value="Hard">Hard</option>
        </select>
        
        <Button onClick={addQuestion} className="bg-yellow-500 text-black px-4 py-2 rounded-lg hover:bg-yellow-600">
          ➕ Add Question
        </Button>
      </div>
    </div>
  );
};

export default CreateGame;
