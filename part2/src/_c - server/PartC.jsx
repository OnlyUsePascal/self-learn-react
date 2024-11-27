import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

const TestAxios = ({ onClickRequest }) => {
  return (
    <>
      <h2>Test Axios</h2>
      <button onClick={onClickRequest}>Click to Fetch</button>
    </>
  );
};

const FetchStatus = ({ good, bad, notes }) => {
  return (
    <>
      <h2>Fetch Status</h2>
      <p>Success request: {good}</p>
      {notes.map((note) => (
        <li key={note.id}>{note.content}</li>
      ))}
      <p>Failed request: {bad}</p>
    </>
  );
};

const UseEffect = ({ onClickRequest }) => {
  const [input, setInput] = useState("");

  const onInputChange = (e) => {
    e.preventDefault();
    setInput(e.target.value);
  };

  // NOTE: effect always load twice
  useEffect(
    () => {
      onClickRequest();
    },
    // order: render twice -> states in array
    [input]
  );

  return (
    <>
      <h2>Use Effect</h2>
      New text and the fetch will restart{" "}
      <input type="text" value={input} onChange={onInputChange} />
    </>
  );
};

export default function PartC() {
  const BASE_URL = "http://localhost:3001/";
  const DELAY = 1000;
  const [notes, setNotes] = useState([]);
  const [good, setGood] = useState("NaN");
  const [bad, setBad] = useState("NaN");

  const onClickRequest = async () => {
    setGood("fetching . . .");
    setBad("fetching . . .");
    setNotes([]);

    await new Promise((res, rej) => setTimeout(res, DELAY));

    axios.get(BASE_URL + "notes").then(async (res) => {
      setGood("Ka Ching!");
      setNotes(res.data);
    });

    axios.get(BASE_URL + "foobar").catch(async (err) => {
      setBad(err.message);
    });
  };

  return (
    <>
      <h1>C - Data Server & Request</h1>
      <TestAxios onClickRequest={onClickRequest} />
      <FetchStatus good={good} bad={bad} notes={notes} />
      <UseEffect onClickRequest={onClickRequest} />
    </>
  );
}
