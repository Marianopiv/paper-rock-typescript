import { FullUsers, GameText } from "../interface/interfaces";

interface DecidePlayStatus {
  chosen: string;
  pcPlay: string;
}



export const decidePlayStatus = ({chosen,pcPlay}: DecidePlayStatus): number => {
  if (
    (chosen === GameText.PAPER && pcPlay === GameText.SCISSORS) ||
    (chosen === GameText.SCISSORS && pcPlay === GameText.ROCK) ||
    (chosen === GameText.ROCK && pcPlay === GameText.PAPER)
  ) {
    return -1;
  } else if (
    (chosen === GameText.PAPER && pcPlay === GameText.ROCK) ||
    (chosen === GameText.SCISSORS && pcPlay === GameText.PAPER) ||
    (chosen === GameText.ROCK && pcPlay === GameText.SCISSORS)
  ) {
    return 1;
  } else {
    return 0;
  }
};

export const getFiveHigher = (fullUsers:FullUsers[]) => {
  return fullUsers.sort((a,b)=>b.highscore-a.highscore).slice(0,5);
}