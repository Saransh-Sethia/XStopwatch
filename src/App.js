import { useState } from "react";
import "./App.css";
import Button from "./components/Button";
import Display from "./components/Display";

function App() {
  const [time, setTime] = useState({
    ms:0,
    s: 0,
    m: 0
});
const [interv, setInterv] = useState();
const [status, setStatus] = useState(0)

let updatedMs = time.ms;
let updatedS = time.s;
let updatedM = time.m;

const run = () => {

  if(updatedMs === 100){
    updatedS++;
    updatedMs = 0
  }
  if(updatedS === 60){
    updatedM++;
    updatedS = 0
  }

  updatedMs++
  return setTime({
    s: updatedS,
    m: updatedM
  })
};

const start = () => {
  run();
  setStatus(1);
  setInterv(setInterval(run,10))
  
};

const stop = () => {
  clearInterval(interv);
  setStatus(0);
}

const reset = () => {
  
  clearInterval(interv);
  setStatus(0);
  setTime({s:0,m:0})
}
  return (
    <div className="App">
      <h1>Stopwatch</h1>
      <Display time={time}/>
      <Button start={start} stop={stop} reset={reset} status={status}/>
    </div>
  );
}

export default App;
