import React, { useState } from "react";
import { decidePlayStatus } from "../helper";
import { Chosen, GameRules, GameText, History } from "../interface/interfaces";

const usePlay = () => {
  const [score, setScore] = useState<number>(0);
  const [chosen, setChosen] = useState<Chosen | null>(null);
  const [pcPlay, setPcPlay] = useState<Chosen | null>(null);
  const [message, setMessage] = useState<string | null>(null);
  const [savedPlays, setSavedPlays] = useState<History[]>([]);

  const handlePlay = (chosen: Chosen | null, pcPlay: Chosen | null) => {
    if (chosen && pcPlay) {
      const result = decidePlayStatus({
        chosen: chosen.title,
        pcPlay: pcPlay.title,
      });
      console.log(result);
      switch (result) {
        case 1:
          setScore(score + 1);
          setMessage(GameRules.WIN);
          break;
        case -1:
          setScore(score - 1);
          setMessage(GameRules.LOSE);
          break;
        case 0:
          setMessage(GameRules.TIE);
          break;

        default:
          return;
      }
      let objeto = {
        userChoose: chosen.title,
        houseChoose: pcPlay.title,
        result: result,
      };
      setSavedPlays([...savedPlays, objeto]);
      
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
    message,
    savedPlays
  };
};

export default usePlay;
