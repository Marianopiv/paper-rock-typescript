import React from "react";
import "./plays.css";
type Props = {
  img: string;
  title: string;
  color: string;
  className?: string;
  history?: boolean;
};

const Plays = ({ img, title, color, className, history }: Props) => {
  return (
    <div className={`rounded-full z-50 ${history ? "w-10" : ""} `}>
      <img
        className={`${
          title === "scissors" ? "custom-rotate":""
        }  bg-white ${history?"border-4 p-0":"custom-border p-4 "} ${color} rounded-full w-28 ${className}`}
        src={img}
        alt=""
      />
    </div>
  );
};

export default Plays;
