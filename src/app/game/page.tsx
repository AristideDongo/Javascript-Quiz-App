'use client';

import React, { useState } from 'react';
import { functionQuestions } from '@/data/gameData';
import Scoreboard from '@/components/Scoreboard';

export default function QuizPage() {
    const [isCompleted, setIsCompleted] = useState(false);
    const [score, setScore] = useState(0);
    const [answers, setAnswers] = useState<string[]>(Array(functionQuestions.length).fill(''));
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [feedback, setFeedback] = useState<{ isCorrect: boolean | null; correctAnswer: string | null }>({ isCorrect: null, correctAnswer: null });
    const [waiting, setWaiting] = useState(false);
    const [showWaitMessage, setShowWaitMessage] = useState(false); // État pour le message d'attente

    const handleInputChange = (value: string) => {
        const newAnswers = [...answers];
        newAnswers[currentQuestionIndex] = value;
        setAnswers(newAnswers);
        setFeedback({ isCorrect: null, correctAnswer: null }); // Réinitialise le feedback lors du changement
        setShowWaitMessage(false); // Réinitialise le message d'attente
    };


    const handleComplete = () => {
        let finalScore = 0;
        functionQuestions.forEach((question, index) => {
            if (answers[index].toLowerCase().trim() === question.correctAnswer.toLowerCase().trim()) {
                finalScore++;
            }
        });
        setScore(finalScore);
        setIsCompleted(true);
    };

    const handleNextQuestion = () => {
        const currentQuestion = functionQuestions[currentQuestionIndex];
        // Vérifie la réponse ici
        if (answers[currentQuestionIndex].toLowerCase().trim() === currentQuestion.correctAnswer.toLowerCase().trim()) {
            setFeedback({ isCorrect: true, correctAnswer: null });
            setScore((prevScore) => prevScore + 1); // Incrémente le score si la réponse est correcte
        } else {
            setFeedback({ isCorrect: false, correctAnswer: currentQuestion.correctAnswer });
        }
    
        setWaiting(true); // Indique que le joueur doit attendre avant de passer à la prochaine question
        setShowWaitMessage(true); // Montre le message d'attente
    
        // Utilise setTimeout pour attendre avant de permettre de passer à la prochaine question
        setTimeout(() => {
            setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
            setFeedback({ isCorrect: null, correctAnswer: null }); // Réinitialise le feedback pour la prochaine question
            setWaiting(false); // Réinitialise l'attente
            setShowWaitMessage(false); // Réinitialise le message d'attente
        }, 3000); // Attend  secondes
    };

    return (
        <div className="flex mt-4 items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-teal-500 p-4">
            {isCompleted ? (
                <Scoreboard score={score} totalQuestions={functionQuestions.length} />
            ) : (
                <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-lg text-center">
                    <h1 className="text-2xl font-bold mb-4">Question {currentQuestionIndex + 1} sur {functionQuestions.length}</h1>
                    <p className="text-lg mb-6">{functionQuestions[currentQuestionIndex].question}</p>
                        <input
                        type="text"
                        value={answers[currentQuestionIndex]}
                        onChange={(e) => handleInputChange(e.target.value)}
                        className={`border w-full rounded-lg p-10 text-center mb-4 ${feedback.isCorrect === true ? 'border-green-500' : feedback.isCorrect === false ? 'border-red-500' : 'border-gray-400'}`}
                        placeholder="Votre réponse"
                    
                        />
                    {feedback.isCorrect === false && feedback.correctAnswer && (
                        <p className="text-red-500 mb-4">Réponse correcte : {feedback.correctAnswer}</p>
                    )}
                    {showWaitMessage && (
                        <p className="text-yellow-500 mb-4">Veuillez patienter 5 secondes avant la prochaine question...</p>
                    )}
                    {currentQuestionIndex < functionQuestions.length - 1 ? (
                        <button
                            onClick={handleNextQuestion}
                            disabled={waiting}
                            className="bg-blue-500 text-white px-4 py-2 rounded mt-4 w-full"
                        >
                            Suivant
                        </button>
                    ) : (
                        <button
                            onClick={handleComplete}
                            disabled={waiting}
                            className="bg-green-500 text-white px-4 py-2 rounded mt-4 w-full"
                        >
                            Terminer le quiz
                        </button>
                    )}
                </div>
            )}
        </div>
    );
}
