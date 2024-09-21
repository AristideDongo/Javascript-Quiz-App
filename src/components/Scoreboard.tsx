"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";

interface ScoreboardProps {
  score: number;
  totalQuestions: number;
}

const Scoreboard: React.FC<ScoreboardProps> = ({ score, totalQuestions }) => {
  const [playerName, setPlayerName] = useState<string | null>(null);

  useEffect(() => {
    const storedPlayerName = localStorage.getItem("playerName");
    if (storedPlayerName) {
      setPlayerName(storedPlayerName);
    }
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen text-white">
      <div className="bg-white text-black p-6 sm:p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-center">
          Score Final de {playerName ? playerName : "Joueur"}
        </h2>
        <h3 className="text-2xl sm:text-3xl font-bold mb-4 text-center">
          Score: {score} sur {totalQuestions}
        </h3>
        <p className="text-center text-base sm:text-lg font-medium mb-8">
          {score / totalQuestions >= 0.5 ? (
            <>
              <span className="text-green-600">😎 Bravo, {playerName} !</span>
              <br />
              Vous avez {score} réponses correctes.
            </>
          ) : (
            <>
              <span className="text-red-600">
                😢 Essayez à nouveau, {playerName} !
              </span>
              <br />
              Vous avez trouvé {score} réponses correctes.
              <span className="block mt-2">
                <a
                  href="https://developer.mozilla.org/fr/docs/Web/JavaScript"
                  className="text-blue-400 underline"
                >
                  Revisitez vos bases sur MDN JavaScript.
                </a>
              </span>
            </>
          )}
        </p>
        <div className="text-center">
          <Link href="/">
            <button className="bg-blue-500 hover:bg-blue-600 text-white text-xl sm:text-2xl font-bold py-2 px-6 rounded-lg transition duration-300">
              Revanche 😤
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Scoreboard;
