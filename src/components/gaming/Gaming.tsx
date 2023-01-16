import React from 'react'
import {options} from "../../config/config"
import { Games } from "../../interface/interfaces"
const Gaming = () => {

  function getRandomArrayElement(arr:Games[]) {
    let randomIndex = Math.floor(Math.random() * arr.length);
    console.log(arr[randomIndex]);
    return arr[randomIndex];
  }

  return (
    <div><button onClick={()=>getRandomArrayElement(options)}>Play Strong</button></div>
  )
}

export default Gaming