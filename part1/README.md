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
      <p>
        hello {props.name}, you are {props.age} years old!
      </p>
    </div>
  );
};

const app = () => {
  return (
    <div>
      <hello name="joun" age="12" />
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

## d - Lots of stuff

### Dealing with large object

There can be many ways

```js
const [stat, setStat] = useState({ left: 0, right: 0 });

// method 1
const onClick1 = (attr) => {
  const newStat = {
    left: stat.left,
    right: stat.right,
  };
  if (attr === "left") newStat.left += 1;
  else newStat.right += 1;

  setStat(newStat);
};

// method 2 - spread feature
const onClick2 = (attr) => {
  // not safe if attr is not existant
  const newStat = {
    ...stat,
    [attr]: stat[attr] + 1,
  };

  setStat(newStat);
};
```

But _NEVER DIRECTLY MODIFY THE STATE ITSELF_

```js
const onClick3 = (attr) => {
  stat[attr] += 1;
  setStat({});
};
```

### Async SetState

There are two ways of modifying a state: replace with a new value, or using a callback.

However, using them in different order can cause different results

```js
const [num, setNum] = useState(0);

const onClick1 = () => {
  setNum(num + 1);
  setNum(num + 1);
};

const onClick2 = () => {
  setNum((n) => n + 1);
  setNum((n) => n + 1);
};

const onClick3 = () => {
  setNum(num + 1);
  setNum((n) => n + 1);
};

const onClick4 = () => {
  setNum((n) => n + 1);
  setNum(num + 1);
};
```

### Setting key for iterative elements

It is common that we get a warning when trying to iterate over a list to render components

```js
<ul>
  {todos.map((todo, index) => {
    return (
      <li>
        {todo.title} {todo.done ? "✅" : ""}
      </li>
    );
  })}
</ul>

// warning: Each child in an array should have a unique "key" prop.
```

One easy way is to add `key` attribute for `li` elements. However, it is not a good practice to do so.

A better one is to create the row's index beforehand (not its position in the array)

```js
<tbody>
  {rows.map((row) => {
    return <ObjectRow key={row.uniqueId} />;
  })}
</tbody>;

// or id provider
function componentWillMount() {
  let rows = this.props.rows.map((item) => {
    return { uid: SomeLibrary.generateUniqueID(), value: item };
  });
}
```

# Unresolved notes

- React props required
- `export default` vs `export const`

# Beautiful sources
- [Key prop for array children](https://stackoverflow.com/questions/28329382/understanding-unique-keys-for-array-children-in-react-js) 

- [Modify a component state](https://stackoverflow.com/questions/37755997/why-cant-i-directly-modify-a-components-state-really/40309023#40309023)

- [State update async](https://react.dev/learn/queueing-a-series-of-state-updates)
