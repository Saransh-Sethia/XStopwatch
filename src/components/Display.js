import React from 'react';
import "../App.css"
const Display = ({time}) => {

  return (
    <div className='container'>
      <p>Time: {time.m}:{`${time.s >= 10 ? time.s : "0" + time.s}`}</p>
    </div>
  )
}

export default Display
