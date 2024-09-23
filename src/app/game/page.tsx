"use client";

import React, { useState } from "react";
import { functionQuestions } from "@/data/gameData";
import Scoreboard from "@/components/Scoreboard";

const QUESTIONS_PER_LEVEL = 10; // Nombre de questions par niveau

export default function QuizPage() {
  const [isCompleted, setIsCompleted] = useState(false);
  const [score, setScore] = useState(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [currentLevel, setCurrentLevel] = useState(0);
  const [feedback, setFeedback] = useState<{
    isCorrect: boolean | null;
    correctAnswer: string | null;
  }>({ isCorrect: null, correctAnswer: null });
  const [waiting, setWaiting] = useState(false);
  const [showWaitMessage, setShowWaitMessage] = useState(false);

  const totalLevels = Math.ceil(functionQuestions.length / QUESTIONS_PER_LEVEL);
  const levelQuestions = functionQuestions.slice(
    currentLevel * QUESTIONS_PER_LEVEL,
    (currentLevel + 1) * QUESTIONS_PER_LEVEL
  );
  const [answers, setAnswers] = useState<string[]>(
    Array(levelQuestions.length).fill("")
  );

  const handleInputChange = (value: string) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestionIndex] = value;
    setAnswers(newAnswers);
    setFeedback({ isCorrect: null, correctAnswer: null });
    setShowWaitMessage(false);
  };

  const handleComplete = () => {
    let finalScore = 0;
    answers.forEach((answer, index) => {
      if (
        answer.toLowerCase().trim() ===
        levelQuestions[index].correctAnswer.toLowerCase().trim()
      ) {
        finalScore++;
      }
    });
    setScore((prevScore) => prevScore + finalScore);
    if (currentLevel < totalLevels - 1) {
      setCurrentLevel((prevLevel) => prevLevel + 1);
      setCurrentQuestionIndex(0);
      setAnswers(Array(levelQuestions.length).fill(""));
      setFeedback({ isCorrect: null, correctAnswer: null });
    } else {
      setIsCompleted(true);
    }
  };

  const handleNextQuestion = () => {
    const currentQuestion = levelQuestions[currentQuestionIndex];
    if (
      answers[currentQuestionIndex].toLowerCase().trim() ===
      currentQuestion.correctAnswer.toLowerCase().trim()
    ) {
      setFeedback({ isCorrect: true, correctAnswer: null });
    } else {
      setFeedback({
        isCorrect: false,
        correctAnswer: currentQuestion.correctAnswer,
      });
    }

    setWaiting(true);
    setShowWaitMessage(true);

    setTimeout(() => {
      if (currentQuestionIndex < levelQuestions.length - 1) {
        setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
      } else {
        handleComplete(); // Passer au niveau suivant ou terminer le quiz
      }
      setFeedback({ isCorrect: null, correctAnswer: null });
      setWaiting(false);
      setShowWaitMessage(false);
    }, 3000);
  };

  const handleSkipLevel = () => {
    if (currentLevel < totalLevels - 1) {
      setCurrentLevel((prevLevel) => prevLevel + 1);
      setCurrentQuestionIndex(0);
      setAnswers(Array(levelQuestions.length).fill(""));
      setFeedback({ isCorrect: null, correctAnswer: null });
    } else {
      setIsCompleted(true);
    }
  };

  return (
    <div className="flex mt-4 items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-teal-500 p-4">
      {isCompleted ? (
        <Scoreboard score={score} totalQuestions={functionQuestions.length} />
      ) : (
        <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-lg text-center">
          <h1 className="text-3xl font-bold mb-4">Niveau {currentLevel + 1}</h1>
          <p className="text-center font-semibold mb-4">
            Question {currentQuestionIndex + 1} sur {levelQuestions.length}
          </p>
          <p className="text-2xl md:text-3xl font-bold mb-2 text-center">
            {levelQuestions[currentQuestionIndex].question}
          </p>
          <input
            type="text"
            value={answers[currentQuestionIndex]}
            onChange={(e) => handleInputChange(e.target.value)}
            className={`border w-full rounded-lg p-10 text-center mb-4 ${
              feedback.isCorrect === true
                ? "border-green-500"
                : feedback.isCorrect === false
                ? "border-red-500"
                : "border-gray-400"
            }`}
            placeholder="Votre réponse"
          />
          {feedback.isCorrect === false && feedback.correctAnswer && (
            <p className="text-red-500 mb-4">
              Réponse correcte : {feedback.correctAnswer}
            </p>
          )}
          {showWaitMessage && (
            <p className="text-yellow-500 mb-4">
              Veuillez patienter 3 secondes avant la prochaine question...
            </p>
          )}
          <button
            onClick={handleNextQuestion}
            disabled={waiting}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg mt-4 w-full hover:bg-blue-600 hover:scale-105 transition duration-300 disabled:bg-gray-500 disabled:cursor-not-allowed"
          >
            {currentQuestionIndex < levelQuestions.length - 1
              ? "Suivant"
              : "Terminer le niveau"}
          </button>
          <button
            onClick={handleSkipLevel}
            className="bg-yellow-500 text-white px-4 py-2 rounded-lg mt-14 w-1/2"
          >
            Sauter le niveau
          </button>
          <p className="text-gray-500 mt-2  font-semibold">
                NB: Lorsque vous sautez un niveau, vous aurez 0/10 pour le
                niveau
              </p>
        </div>
      )}
    </div>
  );
}
