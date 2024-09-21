'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Page() {
    const [playerName, setPlayerName] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPlayerName(e.target.value);
    };

    const handleStartQuiz = () => {
        if (playerName.trim() !== '') {
            localStorage.setItem('playerName', playerName);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-blue-200 to-blue-500 px-4">
            <motion.h1
                className="text-4xl sm:text-6xl mt-16 lg:text-7xl mb-4 font-bold text-black text-center"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                Bienvenue dans Javascript Quiz
            </motion.h1>

            <motion.p
                className="text-lg sm:text-xl lg:text-2xl mb-8 font-semibold text-black text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
            >
                by Ivoit Agence Academy
            </motion.p>

            <motion.input
                type="text"
                placeholder="Entrez votre nom"
                value={playerName}
                onChange={handleChange}
                className="border-2 mt-8 border-gray-300 px-4 py-2 mb-4 rounded-full w-full max-w-xs"
                whileFocus={{ scale: 1.05 }}
            />
            <Link href={playerName ? '/quiz' : "#"}>
                <motion.button
                    onClick={handleStartQuiz}
                    className={`bg-blue-600 text-white px-4 py-2 rounded-full shadow-lg transition duration-300 ease-in-out ${!playerName ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-700'}`}
                    style={{ pointerEvents: playerName ? 'auto' : 'none' }}
                    disabled={!playerName.trim()}
                    whileHover={{ scale: 1.1 }}
                >
                    Commencer
                </motion.button>
            </Link>

            <Link href="/about">
                <motion.button
                    className="bg-green-600 mt-16 text-white px-4 py-2 rounded-full shadow-lg transition duration-300 ease-in-out hover:bg-green-700"
                    whileHover={{ scale: 1.1 }}
                >
                    A propos
                </motion.button>
            </Link>

            <Link href="/404" >
                <motion.button
                    className="bg-red-600 text-white mt-16 px-4 py-2 rounded-full shadow-lg transition duration-300 ease-in-out hover:bg-red-700"
                    whileHover={{ scale: 1.1 }}
                >
                    Si vous voulez découvrir une page de 404, cliquez ici
                </motion.button>
            </Link>
        </div>
    );
}
