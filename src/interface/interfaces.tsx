export interface Games {
  title: string;
  img: string;
  color: string;
}
export interface Chosen {
  img: string;
  title: string;
  color: string;
}

export enum GameText {
  PAPER = "paper",
  ROCK = "rock",
  SCISSORS = "scissors",
}

export enum GameRules {
  WIN = "You win",
  LOSE = "You lose",
  TIE = "Tie",
}

export interface History {
  userChoose: string;
  userImg:string;
  userColor:string;
  houseChoose: string;
  houseImg:string;
  houseColor:string;
  result: number;
}

export interface Users {
  email:string;
  password:string;
}

export interface FullUsers {
  id:string;
  email:string;
  highscore:number;
}