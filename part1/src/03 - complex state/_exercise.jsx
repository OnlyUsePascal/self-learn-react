import { useState } from "react";

const FeedbackBtn = ({ idx, name, cb }) => {
  return (
    <button key={idx} onClick={cb}>
      {name}
    </button>
  );
};

const Feedback = ({ states }) => {
  const updateState = (n) => n + 1;
  return (
    <>
      {states.map((state, index) => {
        return (
          // not good practice,
          // should have used unique id attached with row itself
          <FeedbackBtn
            idx={index}
            name={state.name}
            cb={() => state.cb(updateState)}
          />
        );
      })}
    </>
  );
};

const StatisticLine = ({ idx, name, val }) => {
  return (
    <tr key={idx}>
      <td>{name}</td>
      <td>{val}</td>
    </tr>
  );
};

const Statistics = ({ states }) => {
  const sum = states.reduce((prev, cur) => prev + cur.val, 0);

  return (
    <>
      <table>
        {states.map((state, index) => {
          return (
            // not a good practice either
            // id need to be fixed
            <StatisticLine
              idx={Math.random()}
              name={state.name}
              val={state.val}
            />
          );
        })}
        <StatisticLine idx={Math.random()} name={"Total count"} val={sum} />
      </table>
    </>
  );
};

const Exercise = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const states = [
    { name: "good", cb: setGood, val: good },
    { name: "neutral", cb: setNeutral, val: neutral },
    { name: "bad", cb: setBad, val: bad },
  ];

  return (
    <>
      <h1>Exercise: Unicafe</h1>
      <h2>Give Feeback</h2>
      <Feedback states={states} />
      <h2>Statistics</h2>
      <Statistics states={states} />
    </>
  );
};

export default Exercise;
