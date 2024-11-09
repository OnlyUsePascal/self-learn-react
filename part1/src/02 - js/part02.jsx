import { useState } from "react";

// learn to de-strucuture props
const Hello = ({ name, age }) => {
  const bornYear = () => new Date().getFullYear() - age;

  return (
    <>
      <p>G'day, {name}</p>
      <p>You are born in {bornYear()}</p>
    </>
  );
};

// counter
const CounterTime = () => {
  const [count, setCount] = useState(0);
  setTimeout(() => {
    setCount(count + 1);
  }, 1000);

  // re-rendered non-stop because of time-out
  // the log below repeated is a proof
  console.log(`count with timer ... ${count}`);

  return (
    <>
      <p>Count with timer: {count}</p>
    </>
  );
};

const CustomBtn = ({onClick, btnText}) => {
  // the parent component who hold the onClick also get re-rendered
  // again, check the log
  return (
    <button onClick={onClick}>
      {btnText}
    </button>
  )
}

const CounterBtn = () => {
  const [count, setCount] = useState(0);

  const increaseCount = () => setCount(count + 1);
  const decreaseCnt = () => setCount(count - 1);
  const resetCnt = () => setCount(0);
  
  // the whole component / method is re-rendered when clicked
  // the log below repeated is a proof
  console.log(`count with btn ... ${count}`);
  
  return (
    <>
      <span>Count with btn: {count} </span>
      <button onClick={increaseCount}>Click here</button>
      {/* <button onClick={setCount(count + 1)}>Click here</button> */}

      {/* we can also have button as component */}
      <CustomBtn onClick = {decreaseCnt} btnText = 'decrease'/>
      <CustomBtn onClick = {resetCnt} btnText = 'reset'/>
    </>
  );
};

const Part02 = () => {
  console.log(`Part 02`);

  return (
    <div>
      <h1>Part 1b,c - javascript, state</h1>
      <Hello name="joun" age="12" />
      {/* <CounterTime /> */}
      <CounterBtn />
    </div>
  );
};

export default Part02;
