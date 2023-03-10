import React from "react";
import { getFiveHigher } from "../../helper";
import { FullUsers } from "../../interface/interfaces";

type Props = {
    setModal:(value:boolean)=>void;
    fullUsers:FullUsers[]|[]
};

const HighScore = ({setModal,fullUsers}: Props) => {

  return (
    <div className="text-lg sm:text-4xl text-white absolute inset-0 flex items-center justify-center h-screen  sm:w-screen bg-black z-50 opacity-80 animate__fadeOut">
      <div className="border-2 border-white rounded-md p-3 m-4">
        {" "} <p onClick={()=>setModal(false)} className="hover:cursor-pointer">X</p>
        <h1>HIGH SCORES</h1>
        {fullUsers.length>0&&getFiveHigher(fullUsers).map(({ email, highscore },index) => (
          <div className="flex gap-4 justify-between p-3" key={index}>
            <p>{email}</p>
            <p>{highscore}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HighScore;
