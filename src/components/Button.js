import React from "react";

const Button = ({ start, stop, reset, status }) => {
  return (
    <div>
      {status === 0 ? (
        <>
          <button onClick={()=>start()}>Start</button>
          <button onClick={()=>reset()}>Reset</button>
        </>
      ) : (
        ""
      )}
      {
        status === 1 ? (
            <>
                      <button onClick={()=>stop()}>Stop</button>
                      <button onClick={()=>reset()}>Reset</button>
            </>
        ) : ""
      }
    </div>
  );
};

export default Button;
