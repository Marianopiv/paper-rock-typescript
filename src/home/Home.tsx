import React, { useEffect, useState } from "react";
import triangle from "../assets/triangle.png";
import Gaming from "../components/gaming/Gaming";
import Plays from "../components/plays/Plays";
import { options } from "../config/config.js";
import usePlay from "../hook/usePlay";
import { Chosen, Games } from "../interface/interfaces";
type Props = {};

const Home = (props: Props) => {
  const {
    handlePlay,
    score,
    resetGame,
    chosen,
    setChosen,
    pcPlay,
    setPcPlay,
    playAgain,
    message
  } = usePlay();

  function getRandomArrayElement(arr: Games[]) {
    let randomIndex = Math.floor(Math.random() * arr.length);
    const found = options.find((item: object, index) => index === randomIndex);
    if (found) {
      setPcPlay(found);
    }

    return arr[randomIndex];
  }

  const handleChoose = (element: object) => {
    const found = options.find((item: object) => item === element);
    if (found) {
      setChosen(found);
      getRandomArrayElement(options);
    }
  };

  useEffect(() => {
    if (chosen && pcPlay) {
      handlePlay(chosen, pcPlay);
    }
  }, [chosen]);

  return (
    <div className="h-screen flex flex-col items-center">
      <div className="border-2 p-4 mt-6 mx-4 rounded-md flex justify-between sm:w-2/6">
        <h3 className="uppercase  text-white w-1/4 text-left text-xl font-bold">
          rock paper scissors
        </h3>{" "}
        <div className="bg-gray-100 flex flex-col items-center p-4 rounded-md w-24 hover:cursor-pointer" onClick={resetGame}>
          <p className="uppercase text-xs dark:text-black">score</p>
          <p className="font-bold text-4xl dark:text-black">{score}</p>
        </div>
      </div>
      {chosen && pcPlay ? (
        <div className="sm:flex justify-around mt-5 sm:mt-20 items-center w-screen text-white uppercase">
          <div className="flex flex-col items-center gap-5">
            <h3 className="sm:text-2xl text-xl">You picked</h3>
            <Plays
              className={"sm:w-52"}
              img={chosen.img}
              title={chosen.title}
              color={chosen.color}
            />
          </div>
          <div className="flex flex-col my-4 gap-5">
            <h3 className="font-bold text-4xl">{message}</h3>
            <button
              onClick={playAgain}
              className="text-blue-900 uppercase font-bold mx-16 sm:mx-0 dark:bg-white "
            >
              play again
            </button>
          </div>
          <div className="flex flex-col items-center gap-5">
            <h3 className="sm:text-2xl text-xl">The House Picked</h3>
            <Plays
              className={"sm:w-52"}
              img={pcPlay.img}
              title={pcPlay.title}
              color={pcPlay.color}
            />
          </div>
        </div>
      ) : (
        <div className="relative flex justify-center w-80 mt-10 gap-14 flex-wrap">
          <img
            className="absolute -z-400 w-48 h-40 top-14 "
            src={triangle}
            alt=""
          />
          {options.map((item, index) => (
            <div
              onClick={() => handleChoose(item)}
              key={index}
              className="z-50"
            >
              <Plays
                className="hover:cursor-pointer"
                img={item.img}
                title={item.title}
                color={item.color}
              />
            </div>
          ))}{" "}
        </div>
      )}
    </div>
  );
};

export default Home;
