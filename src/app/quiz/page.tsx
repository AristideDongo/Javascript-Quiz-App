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
        <div className="p-4">
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
