import React from "react";

type Props = {
  action?: () => void;
  text: string;
  className?:string;
};

const Button = ({ action, text, className }: Props) => {
  return (
    <button
      className={`text-blue-900 uppercase font-bold ${text==="login"?"mx-16":"mx-2"} sm:mx-0 ${className} dark:bg-white`}
      onClick={action}
    >
      {text}
    </button>
  );
};

export default Button;
