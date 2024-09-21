'use client';

import React, { useState } from 'react';
import Quiz from '@/components/Quiz';
import Scoreboard from '@/components/Scoreboard';

const QuizPage = () => {
    const [isCompleted, setIsCompleted] = useState(false);
    const [score, setScore] = useState(0);
    const totalQuestions = 100;

    const handleComplete = (finalScore: number) => {
        setScore(finalScore);
        setIsCompleted(true);
    };


    return (
        <div className="flex flex-col mt-4 items-center justify-center h-screen bg-gradient-to-r from-blue-500 to-teal-500">
            {isCompleted ? (
                <Scoreboard score={score} totalQuestions={totalQuestions} />
            ) : (
                <>
                    <Quiz onComplete={handleComplete} />
                </>
            )}
        </div>
    );
};

export default QuizPage;
