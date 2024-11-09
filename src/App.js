import { useState } from "react";
import "./App.css";
import Button from "./components/Button";
import Display from "./components/Display";

function App() {
  const [time, setTime] = useState({
    s: 0,
    m: 0
});
const [interv, setInterv] = useState();
const [status, setStatus] = useState(0)

let updatedS = time.s;
let updatedM = time.m;

const run = () => {

  if(updatedS === 65){
    updatedM++;
    updatedS = 0
  }

  updatedS++
  return setTime({
    s: updatedS,
    m: updatedM
  })
};

const start = () => {
  run();
  setStatus(1);
  setInterv(setInterval(run,1000))
  
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
