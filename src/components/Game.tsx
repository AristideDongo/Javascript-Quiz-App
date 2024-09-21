'use client';

import { useState } from 'react';
import { functionQuestions } from '@/data/gameData';

const AnswerPage = () => {
  const [answers, setAnswers] = useState<string[]>(Array(functionQuestions.length).fill(''));
  const [score, setScore] = useState<number | null>(null);

  const handleInputChange = (index: number, value: string) => {
    const newAnswers = [...answers];
    newAnswers[index] = value;
    setAnswers(newAnswers);
  };

  const handleSubmit = () => {
    let tempScore = 0;
    functionQuestions.forEach((question, index) => {
      if (answers[index].toLowerCase().trim() === question.correctAnswer.toLowerCase().trim()) {
        tempScore++;
      }
    });
    setScore(tempScore);
  };

  return (
    <div className="p-4 max-w-lg mx-auto">
      <h1 className="text-2xl sm:text-3xl font-bold mb-4 text-center">Répondez aux questions sur les fonctions en JavaScript</h1>
      {functionQuestions.map((question, index) => (
        <div key={index} className="mb-6">
          <p className="text-lg mb-2">{question.question}</p>
          <input
            type="text"
            value={answers[index]}
            onChange={(e) => handleInputChange(index, e.target.value)}
            className="border border-gray-400 p-2 w-full rounded"
            placeholder="Votre réponse"
          />
        </div>
      ))}

      <button
        onClick={handleSubmit}
        className="bg-blue-500 text-white px-4 py-2 rounded mt-4 w-full hover:bg-blue-600 transition duration-200"
      >
        Soumettre
      </button>

      {score !== null && (
        <div className="mt-6 text-center">
          <p className="text-xl font-bold">
            Vous avez obtenu {score} sur {functionQuestions.length}.
          </p>
        </div>
      )}
    </div>
  );
};

export default AnswerPage;
