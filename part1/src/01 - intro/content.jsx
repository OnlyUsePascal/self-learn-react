const Hello = (props) => {
  console.log(props);

  const now = new Date();
  return (
    <div>
      <p>Hello World, it is {now.toString()}!</p>
      <p>
        Hello {props.name}, you are {props.age} years old!
      </p>
    </div>
  );
};


const Part01 = () => {
  const value1 = ["a", "b", "c"];
  const value2 = { name: "joun", age: 20 };

  return (
    <div>
      <h1>part 1a - intro to react</h1>
      <Hello name="joun" age="12" />
      <p>Passed value: {value1}</p>
      {/* <p>Passed value: {value2}</p> */}
    </div>
  );
}

export default Part01;