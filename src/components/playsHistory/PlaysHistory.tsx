import React, { useEffect } from "react";
import "animate.css";
import { History } from "../../interface/interfaces";

type Props = {
  savedPlays: History[];
};

const PlaysHistory = ({ savedPlays }: Props) => {
  const invertido = savedPlays.slice(savedPlays.length - 3).reverse();

  console.log(invertido);

  useEffect(() => {}, [invertido]);

  return (
    <div className="fixed border-2 text-white font-bold h-40 bottom-4  lg:left-3/4  rounded-md  lg:bottom-3/4 animate__animated animate__swing p-2">
      Last matches Played:
      {invertido.map(({ userChoose, houseChoose, result }, index) => (
        <div key={index} className="flex mt-2 text-md px-4 gap-3 justify-center">
          <p className="text-sm">You choose {userChoose}</p>
          <p className="text-sm">Pc choose {houseChoose}</p>
          <p className="text-sm">{result}</p>
        </div>
      ))}
    </div>
  );
};

//Agregar interface a esto y meter jugadas a Tic Tac Toe

export default PlaysHistory;
