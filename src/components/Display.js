import React from 'react';
const Display = ({time}) => {

  return (
    <div>
      <p>Time: {time.m}:{`${time.s >= 10 ? time.s : "0" + time.s}`}</p>
    </div>
  )
}

export default Display
