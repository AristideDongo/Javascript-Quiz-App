"use client";

import React, { useState } from "react";
import quizData from "@/data/quizData";

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

const QUESTIONS_PER_LEVEL = 10; // Nombre de questions par niveau

const Quiz: React.FC<QuizProps> = ({ onComplete }) => {
  const [currentLevel, setCurrentLevel] = useState<number>(1);
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [score, setScore] = useState<number>(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [isCorrectAnswer, setIsCorrectAnswer] = useState<boolean | null>(null);
  const [isDisabled, setIsDisabled] = useState<boolean>(false);
  const [correctAnswerIndex, setCorrectAnswerIndex] = useState<number | null>(
    null
  );
  const [consecutiveWrongAnswers, setConsecutiveWrongAnswers] =
    useState<number>(0); // Nouvelle state pour suivre les mauvaises réponses
  const [showEncouragement, setShowEncouragement] = useState<boolean>(false); // Suivre si le message d'encouragement doit être affiché
  const [levelCompleted, setLevelCompleted] = useState<boolean>(false); // Nouvelle state pour savoir si le niveau est terminé
  const [levelScores, setLevelScores] = useState<number[]>([]); // Stocker le score de chaque niveau

  // Calculer le début et la fin des questions du niveau actuel
  const startQuestionIndex = (currentLevel - 1) * QUESTIONS_PER_LEVEL;
  const endQuestionIndex = startQuestionIndex + QUESTIONS_PER_LEVEL;
  const currentLevelQuestions = quizData.slice(
    startQuestionIndex,
    endQuestionIndex
  );

  const handleAnswer = (index: number, isCorrect: boolean) => {
    setSelectedAnswer(index);
    setIsCorrectAnswer(isCorrect);
    setIsDisabled(true);

    const correctIndex = currentLevelQuestions[
      currentQuestion
    ].answers.findIndex((answer) => answer.isCorrect);
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
      if (currentQuestion < currentLevelQuestions.length - 1) {
        setCurrentQuestion((prevQuestion) => prevQuestion + 1);
      } else {
        // Stocker le score du niveau actuel avant de passer au niveau suivant
        setLevelScores((prevScores) => [...prevScores, score]);
        setLevelCompleted(true); // Niveau terminé
      }
      // Réinitialiser les états après chaque question
      setSelectedAnswer(null);
      setIsCorrectAnswer(null);
      setIsDisabled(false);
      setCorrectAnswerIndex(null);
    }, 1000);
  };

  const handleNextLevel = () => {
    if (endQuestionIndex < quizData.length) {
      setCurrentLevel((prevLevel) => prevLevel + 1); // Passer au niveau suivant
      setCurrentQuestion(0); // Réinitialiser la question du niveau suivant
      setLevelCompleted(false); // Réinitialiser le statut de fin de niveau
    } else {
      onComplete(score); // Terminer le quiz s'il n'y a plus de niveaux
    }
  };

  return (
    <div className="p-4">
      <div className="bg-white shadow-lg rounded-lg p-6 md:p-8 max-w-md w-full mx-auto">
        {showEncouragement && (
          <div className="text-red-600 font-bold text-center mb-4">
            5 mauvaises réponses consécutives ! Reprends-toi en main, tu peux y
            arriver !
          </div>
        )}

        {!levelCompleted ? (
          <>
            <h1 className="text-2xl md:text-3xl font-bold mb-4 text-center">
              Niveau {currentLevel}
            </h1>
            <p className="text-center font-semibold mb-4">
              Question {currentQuestion + 1} sur {currentLevelQuestions.length}
            </p>
            <h2 className="text-2xl md:text-3xl font-bold mb-2 text-center">
              {currentLevelQuestions[currentQuestion].question}
            </h2>

            <div className="flex flex-col space-y-2">
              {currentLevelQuestions[currentQuestion].answers.map(
                (answer, index) => (
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
                )
              )}
            </div>

            {/* Bouton pour sauter de niveau */}
            <div className="text-center mt-4">
              <button
                onClick={handleNextLevel}
                className="bg-yellow-500 text-white px-4 py-2 mt-10 rounded-lg shadow hover:bg-yellow-600"
              >
                Sauter le niveau
              </button>
              <p className="text-gray-500 mt-2  font-semibold">
                NB: Lorsque vous sautez un niveau, vous aurez 0/10 pour le
                niveau
              </p>
            </div>
          </>
        ) : (
          <div className="text-center">
            <h2 className="text-xl md:text-2xl font-bold mb-2">
              Niveau {currentLevel} terminé !
            </h2>
            <p className="text-lg mb-4">
              Vous avez obtenu {score} bonnes réponses sur {quizData.length}.
            </p>
            <button
              onClick={handleNextLevel}
              className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700"
            >
              {endQuestionIndex < quizData.length
                ? "Passer au niveau suivant"
                : "Quiz terminé"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Quiz;
