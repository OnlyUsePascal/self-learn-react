# part 01 - intro to react
## a - intro to react

fast booting a project

```sh
# old way
$ create-react-app

$ npm run start


# new way
$ npm create vite@latest part1 -- --template react

$ npm run dev
```

a root component

```js
import { strictmode } from "react";
import { createroot } from "react-dom/client";
import app from "./app";

createroot(document.getelementbyid("root")).render(<app />);
```

passing props

```js
const hello = (props) => {
  console.log(props);

  return (
    <div>
      <p>hello {props.name}, you are {props.age} years old!</p>
    </div>
  )
}

const app = () => {
  return (
    <div>
      <hello name = 'joun' age = '12'/>   
    </div>
  );
};
```

possible error - react do not allow objects rendering
```js
const app = () => {
  const value1 = ["a", "b", "c"];
  const value2 = { name: "joun", age: 20 };

  return (
    <div>
      <hello name="joun" age="12" />
      <p>passed value: {value1}</p>
      {/* <p>passed value: {value2}</p> */}
    </div>
  );
};
```

## b - component state, event handlers

add some magic

```js
const counterbtn = () => {
  const [count, setcount] = usestate(0);
  const increasecount = () => setcount(count + 1);

  // the whole component / method is re-rendered when clicked
  // the log below repeated is a proof
  console.log(`count with btn ... ${count}`);
 
  // setTimeout(() => {
  //   setCount(count + 1);
  // }, 1000);

  return (
    <>
      <span>Count with btn: {count} </span>
      <button onClick={increaseCount}>Click here</button>
      {/* <button onClick={setCount(count + 1)}>Click here</button> */}
    </>
  );
};
```

- `count` is the state, while `setCount` is a callback that modifies the state

- We can either trigger the callback using `setTimeout`, or attach to a button `onClick`

- When triggered, the component is re-rendered, or the function returning it is re-called. Check how the `console.log` is called when triggered.
  - `setTimeout` is more special such that, since the method is re-called, `setTimeout` is also set, making the timer run non-stop

- If we use `onClick={setCount()}`, this immediately cause the component to re-render -> `setCount()` get called again -> infinite loop

One best practice in React is to lift the state up in the component hierarchy. The documentation says:

> Often, several components need to reflect the same changing data. We recommend lifting the shared state up to their closest common ancestor.

```js
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
  ...
  const decreaseCnt = () => setCount(count - 1);
  const resetCnt = () => setCount(0);
  ...

  return (
    <>
      ...
      <CustomBtn onClick = {decreaseCnt} btnText = 'decrease'/>
      <CustomBtn onClick = {resetCnt} btnText = 'reset'/>
    </>
  );
};
```

> In React, it’s conventional to use `onSomething` names for props which take functions which handle events and `handleSomething` for the actual function definitions which handle those events






## Unresolved notes
- React props required
- `export default` vs `export const`