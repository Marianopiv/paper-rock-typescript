import React from 'react'
import './plays.css'
type Props = {
  img:string,
  title:string,
  color:string,
  className?:string,
}

const Plays = ({img,title,color,className}: Props) => {
  return (
    <div className={`rounded-full z-50 `}><img className={`${title==="scissors"&&"custom-rotate"}  bg-white custom-border ${color} p-4 rounded-full w-28 ${className}`}src={img} alt="" /></div>
  )
}

export default Plays