import { useState } from 'react';

const useScore = () => {
    const [score, setScore] = useState<number>(0);

    const updateScore = (correct: boolean) => {
        if (correct) {
            setScore(prevScore => prevScore + 1);
        }
    };

    return { score, updateScore };
};

export default useScore;
