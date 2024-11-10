import { useState } from "react";

const hanlderFactory = (handlerName, setState) => {
  const handlers = [
    { name: "plus two", cb: (n) => n + 2 },
    { name: "multiply two", cb: (n) => n * 2 },
  ];

  return handlers.find((handler) => handler.name == handlerName);
};

const ReturnedHandler = () => {
  const [num, setNum] = useState(1);
  const getHandler = (name) => {
    const handlers = [
      { name: "plus", cb: (n) => n + 2 },
      { name: "multiply", cb: (n) => n * 2 },
    ];

    const handler = handlers.find((handler) => handler.name == name);
    return () => setNum(handler.cb);
  };

  return (
    <>
      <h2>Returned Handler</h2>
      <p>Current value: {num}</p>
      <button onClick={getHandler('plus')}>Plus</button>
      <button onClick={getHandler('multiply')}>Multiply</button>
    </>
  );
};

export default ReturnedHandler;
