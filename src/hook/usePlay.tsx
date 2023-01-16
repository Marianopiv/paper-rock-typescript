import React, { useState } from "react";
import { Chosen } from "../interface/interfaces";

const usePlay = () => {
  const [score, setScore] = useState<number>(0);
  const [chosen, setChosen] = useState<Chosen | null>(null);
  const [pcPlay, setPcPlay] = useState<Chosen | null>(null);
  const [message, setMessage] = useState<string | null>(null);

  const handlePlay = (chosen: Chosen | null, pcPlay: Chosen | null) => {
    if (chosen && pcPlay) {
      if (
        (chosen.title === "paper" && pcPlay.title === "scissors") ||
        (chosen.title === "scissors" && pcPlay.title === "rock") ||
        (chosen.title === "rock" && pcPlay.title === "paper")
      ) {
        setScore(score - 1);
        setMessage("You Lose")
      } else if (
        (chosen.title === "paper" && pcPlay.title === "rock") ||
        (chosen.title === "scissors" && pcPlay.title === "paper") ||
        (chosen.title === "rock" && pcPlay.title === "scissors")
      ) {
        setScore(score + 1);
        setMessage("You Win")
      } else {
        setMessage("Tie")
      }
    }
  };

  const resetGame = () => {
    setScore(0);
  };

  const playAgain = () => {
    setChosen(null);
    setPcPlay(null);
  };

  return {
    handlePlay,
    score,
    resetGame,
    chosen,
    setChosen,
    pcPlay,
    setPcPlay,
    playAgain,
    message
  };
};

export default usePlay;
