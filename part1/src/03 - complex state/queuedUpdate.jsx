import { useState } from "react";

const QueuedUpdate = () => {
  const [num, setNum] = useState(0);
  
  const onClick1 = () => {
    setNum(num + 1);
    setNum(num + 1);
  }
  
  const onClick2 = () => {
    setNum(n => n+1);
    setNum(n => n+1);
  }
  
  const onClick3 = () => {
    setNum(num + 1);
    setNum(n => n+1);
  }

  const onClick4 = () => {
    setNum(n => n+1);
    setNum(num + 1);
  }

  return (<>
    <h2>Queued Update</h2>
    <p>Current value: {num}</p>
    <button onClick={onClick1}>[ value, value ]</button>
    <button onClick={onClick2}>[ callback, callback ]</button>
    <button onClick={onClick3}>[ value, callback ]</button>
    <button onClick={onClick4}>[ callback, value ]</button>
  </>)
}

export default QueuedUpdate;