    'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function Page() {
    const [playerName, setPlayerName] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPlayerName(e.target.value);
    };

    const handleStartQuiz = () => {
        // Sauvegarde du nom du joueur dans le localStorage pour qu'il soit récupéré dans la page des scores
        if (playerName.trim() !== '') {
            localStorage.setItem('playerName', playerName);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-4xl mb-4 font-bold ">Bienvenue dans Javascript Quiz</h1>
            <p className="text-lg mb-4 font-semibold" >by Aristide Dongo</p>
            <input
                type="text"
                placeholder="Entrez votre nom"
                value={playerName}
                onChange={handleChange}
                className="border-2 border-gray-300 px-4 py-2 mb-4"
            />
            <Link href={playerName ? '/quiz' : "#"}>
                <button
                onClick={handleStartQuiz}
                className={`bg-blue-500 text-white px-4 py-2 rounded ${!playerName ? 'opacity-50 cursor-not-allowed' : ''}`}
                style={{ pointerEvents: playerName ? 'auto' : 'none' }}
                disabled={!playerName.trim()}
                >
                    Commencer
                </button>
                
            </Link>
        </div>
    );
}
