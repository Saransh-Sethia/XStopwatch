import React, { useState } from 'react';
import "../App.css"
const Display = ({time}) => {

  return (
    <div className='container'>
      <p>Time: </p>
      <div className='time'>
      <p>{time.m}</p>
      :
      <p>{time.s >= 10 ? time.s : "0" + time.s}</p>
      </div>
    </div>
  )
}

export default Display
