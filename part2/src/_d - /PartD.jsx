import axios from "axios";
import { useState } from "react";

const BASE_URL = "http://localhost:3001/notes";

const NewNote = ({ newNoteContent, onChangeNewNote, onClickNewNote }) => {
  return (
    <form>
      New note here:
      <input type="text" value={newNoteContent} onChange={onChangeNewNote} />
      <button onClick={onClickNewNote} type="submit">
        Submit
      </button>
    </form>
  );
};

export default function PartD({ onClickRequest }) {
  const [newNoteContent, setNewNote] = useState("");

  const onChangeNewNote = (e) => {
    setNewNote(e.target.value);
  };

  const onClickNewNote = (e) => {
    e.preventDefault();
    if (newNoteContent.length == 0) return;

    const newNote = {
      content: newNoteContent,
      important: Math.random() < 0.5,
    };
    // console.log(newNote);

    axios.post(BASE_URL, newNote).then((res) => {
      onClickRequest();
      setNewNote("");
    });
  };

  return (
    <>
      <h1>D - More than GET</h1>
      <NewNote
        onClickNewNote={onClickNewNote}
        onChangeNewNote={onChangeNewNote}
        newNoteContent={newNoteContent}
      />
    </>
  );
}
