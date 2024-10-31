import { useState } from "react";
// import reactLogo from "./assets/react.svg"; // relative
// import "./App.css";
import viteLogo from "/vite.svg"; // absolute: from "public"

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App
const Hello = (props) => {
  console.log(props);
  
  const now = new Date();
  return (
    <div>
      <p>Hello World, it is {now.toString()}!</p>
      <p>Hello {props.name}, you are {props.age} years old!</p>
    </div>
  )
}

const App = () => {
  console.log("Hello world!");
  const a = 10;
  const b = 20;

  return (
    <div>
      <Hello name = 'joun' age = '12'/>   
      <Hello name = 'joun' age = '12'/>   

      <p>
        {a} plus {b} is {a+b}
      </p>
    </div>
  );
};

export default App;
