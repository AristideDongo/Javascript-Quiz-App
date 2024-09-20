'use client';
import React from 'react';

interface ProgressProps {
    score: number;
    totalQuestions: number;
}

const Progress: React.FC<ProgressProps> = ({ score, totalQuestions }) => {
    const percentage = totalQuestions > 0 ? (score / totalQuestions) * 100 : 0;

    return (
        <div className="mb-4">
            <h3 className="text-lg">
                Score: {score} / {totalQuestions}
            </h3>
            <div className="w-full bg-gray-200 rounded-full h-4">
                <div
                    className="bg-blue-500 h-4 rounded-full"
                    style={{ width: `${percentage}%` }}
                ></div>
            </div>
            <p className="text-sm text-gray-600">{percentage.toFixed(0)}%</p>
        </div>
    );
};

export default Progress;
