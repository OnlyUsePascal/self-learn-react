import Exercise from "./_exercise";
import Exercise2 from "./_exercise2";
import ComplexState from "./complexState";
import ConditionalRender from "./conditionalRender";
import QueuedUpdate from "./queuedUpdate";
import ReturnedHandler from "./returnedHandler";


const Part03 = () => {
  return (
    <>
      <h1>Part d - complex state</h1>
      <ComplexState />
      <QueuedUpdate />
      <ConditionalRender />
      <ReturnedHandler />
      <Exercise />
      <Exercise2 />
    </>
  );
};

export default Part03;
