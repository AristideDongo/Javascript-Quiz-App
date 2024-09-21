"use client";

import React, { useState, useEffect } from "react";
import quizData from "@/data/quizData";
import Progress from "@/components/Progress"; // Importer le composant Progress

// Définir l'interface pour les données du quiz
interface Answer {
  text: string;
  isCorrect: boolean;
}

interface QuizQuestion {
  question: string;
  answers: Answer[];
}

interface QuizProps {
  onComplete: (score: number) => void;
}

// Fonction pour mélanger un tableau
const shuffleArray = (array: QuizQuestion[]): QuizQuestion[] => {
  return array.sort(() => Math.random() - 0.5);
};

const Quiz: React.FC<QuizProps> = ({ onComplete }) => {
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [score, setScore] = useState<number>(0);
  const [shuffledQuizData, setShuffledQuizData] =
    useState<QuizQuestion[]>(quizData);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [isCorrectAnswer, setIsCorrectAnswer] = useState<boolean | null>(null);
  const [isDisabled, setIsDisabled] = useState<boolean>(false);
  const [correctAnswerIndex, setCorrectAnswerIndex] = useState<number | null>(
    null
  );
  const [consecutiveWrongAnswers, setConsecutiveWrongAnswers] =
    useState<number>(0); // Nouvelle state pour suivre les mauvaises réponses
  const [showEncouragement, setShowEncouragement] = useState<boolean>(false); // Suivre si le message d'encouragement doit être affiché

  useEffect(() => {
    // Mélanger les questions lors du premier rendu
    setShuffledQuizData(shuffleArray([...quizData]));
  }, []);

  const handleAnswer = (index: number, isCorrect: boolean) => {
    setSelectedAnswer(index);
    setIsCorrectAnswer(isCorrect);
    setIsDisabled(true);

    const correctIndex = shuffledQuizData[currentQuestion].answers.findIndex(
      (answer) => answer.isCorrect
    );
    setCorrectAnswerIndex(correctIndex);

    if (isCorrect) {
      setScore((prevScore) => prevScore + 1);
      setConsecutiveWrongAnswers(0); // Réinitialiser le compteur si réponse correcte
      setShowEncouragement(false); // Cacher le message si on était dans la mauvaise série
    } else {
      setConsecutiveWrongAnswers((prev) => prev + 1); // Incrémenter les mauvaises réponses
      if (consecutiveWrongAnswers + 1 >= 5) {
        setShowEncouragement(true); // Afficher le message d'encouragement après 5 mauvaises réponses
      }
    }

    setTimeout(() => {
      if (currentQuestion < shuffledQuizData.length - 1) {
        setCurrentQuestion((prevQuestion) => prevQuestion + 1);
      } else {
        onComplete(score + (isCorrect ? 1 : 0)); // Compléter le quiz
      }
      // Réinitialiser les états après chaque question
      setSelectedAnswer(null);
      setIsCorrectAnswer(null);
      setIsDisabled(false);
      setCorrectAnswerIndex(null);
    }, 1000);
  };

  return (
    <div className="p-4">
      <div className="bg-white shadow-lg rounded-lg p-6 md:p-8 max-w-md w-full mx-auto">
        <Progress score={score} totalQuestions={shuffledQuizData.length} />

        {showEncouragement && (
          <div className="text-red-600 font-bold text-center mb-4">
            5 mauvaises réponses consécutives ! Reprends-toi en main, tu peux y
            arriver !
          </div>
        )}

        <h2 className="text-xl md:text-2xl font-bold mb-2 text-center">
          {shuffledQuizData[currentQuestion].question}
        </h2>
        <p className="text-center mb-4">
          Question {currentQuestion + 1} sur {shuffledQuizData.length}
        </p>

        <div className="flex flex-col space-y-2">
          {shuffledQuizData[currentQuestion].answers.map((answer, index) => (
            <button
              key={index}
              onClick={() => handleAnswer(index, answer.isCorrect)}
              className={`transition duration-300 ease-in-out transform hover:scale-105 px-4 py-2 rounded-lg shadow
                            ${
                              selectedAnswer === index
                                ? isCorrectAnswer
                                  ? "bg-green-500"
                                  : "bg-red-500"
                                : correctAnswerIndex === index &&
                                  !isCorrectAnswer
                                ? "bg-green-500"
                                : "bg-blue-600"
                            }
                            ${
                              isDisabled
                                ? "cursor-not-allowed"
                                : "hover:bg-blue-700 text-white"
                            }
                        `}
              disabled={isDisabled}
            >
              {answer.text}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Quiz;
