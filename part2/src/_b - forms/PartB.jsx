import { useState } from "react";
import Homework from "./Homework";

const Note = ({ key, note }) => {
  return (
    <li key={key} style={{ fontWeight: note.important ? "bold" : "" }}>
      {note.content}
    </li>
  );
};

const Form = ({ note, handleNoteChange, addNote }) => {
  return (
    <form onSubmit={addNote}>
      <input
        type="text"
        value={note} // read-only, controlled by App
        onChange={handleNoteChange} // add handler to update component
      />
      <button type="submit">Submit</button>
    </form>
  );
};

const FilterBtn = ({ isFiltered, onClickFilter }) => {
  return (
    <>
      <p>Status: {isFiltered.toString()}</p>
      <button onClick={onClickFilter}>Toggle Filter</button>
    </>
  );
};

const PartB = () => {
  const [notes, setNotes] = useState([
    {
      id: 1,
      content: "HTML is easy",
      important: true,
    },
    {
      id: 2,
      content: "Browser can execute only JavaScript",
      important: false,
    },
    {
      id: 3,
      content: "GET and POST are the most important methods of HTTP protocol",
      important: true,
    },
  ]);

  const [note, setNote] = useState("send nude");

  const addNote = (eve) => {
    eve.preventDefault();
    console.log("button click", eve.target);
    if (note.length == 0) return;

    const newNoteObj = {
      id: String(notes.length + 1),
      content: note,
      important: Math.random() < 0.5,
    };

    setNotes(notes.concat(newNoteObj)); //concat, not push
    setNote("");
  };

  const handleNoteChange = (eve) => {
    const newNote = eve.target.value;
    setNote(newNote);
  };

  const [isFiltered, setIsFiltered] = useState(false);
  const onClickFilter = () => {
    setIsFiltered(!isFiltered);
  };

  return (
    <>
      <h1>B - Forms</h1>
      <h2>Notes</h2>
      {notes
        .filter((item) => !isFiltered || (isFiltered && item.important))
        .map((note, idx) => {
          return <Note key={note.id} note={note} />;
        })}

      <h2>Form</h2>
      <Form note={note} addNote={addNote} handleNoteChange={handleNoteChange} />

      <h2>Filter button</h2>
      <FilterBtn isFiltered={isFiltered} onClickFilter={onClickFilter} />
      
      <Homework />
    </>
  );
};

export default PartB;
