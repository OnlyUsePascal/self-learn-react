import { useState } from "react";

const anecdotes = [
  "If it hurts, do it more often.",
  "Adding manpower to a late software project makes it later!",
  "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
  "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
  "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
  "Premature optimization is the root of all evil.",
  "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
  "The only way to go fast, is to go well.",
];

const anecdoteVotes = new Uint8Array(anecdotes.length);

const getRandomIdx = () => {
  return Math.floor(Math.random() * anecdotes.length);
};

const Anecdote = ({ content }) => {
  return <p>{content}</p>;
};

const Btn = ({ name, cb }) => {
  return <button onClick={cb}>{name}</button>;
};

const Leaderboard = ({ idxWinner }) => {
  return (
    <>
      <h2>Leaderboard</h2>
      {idxWinner != -1 ? (
        <>
          <p>{anecdotes[idxWinner]}</p>
          <p>{`votes: ${anecdoteVotes[idxWinner]}`}</p>
        </>
      ) : (
        <p>You haven't vote shit</p>
      )}
    </>
  );
};

const Exercise2 = () => {
  const [idx, setIdx] = useState(getRandomIdx());
  const [idxWinner, setIdxWinner] = useState(-1);

  const nextQuote = () => {
    while (true) {
      const newIdx = getRandomIdx();

      if (newIdx != idx) {
        console.log(newIdx);
        setIdx(newIdx);
        return;
      }
    }
  };

  const voteQuote = () => {
    anecdoteVotes[idx] += 1;
    console.log(anecdoteVotes);
    
    if (idxWinner == -1 || anecdoteVotes[idx] > anecdoteVotes[idxWinner]) {
      setIdxWinner(idx);
    }

    nextQuote();
  };

  return (
    <>
      <h1>Homework: vote my anecdote</h1>
      <Anecdote content={anecdotes[idx]} />
      <Btn name={"Next quote"} cb={nextQuote} />
      <Btn name={"Vote this"} cb={voteQuote} />
      <Leaderboard idxWinner={idxWinner} />
    </>
  );
};

export default Exercise2;
