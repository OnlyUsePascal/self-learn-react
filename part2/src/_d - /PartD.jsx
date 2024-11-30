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

const ToggleNote = ({ onClickRequest, notesLen }) => {
  const [noteId, setNoteId] = useState(0);

  const onClickNoteId = (e) => {
    e.preventDefault();
    setNoteId(
      e.target.value == "-"
        ? (noteId - 1 + notesLen) % notesLen
        : (noteId + 1) % notesLen
    );
  };

  const onClickToggle = (e) => {
    e.preventDefault();
    const putUrl = BASE_URL + `/${noteId}`;
    axios.get(putUrl).then((res) => {
      // assume things is right
      const note = res.data;
      const newNote = { ...note, important: !note.important };

      axios.put(putUrl, newNote).then((res) => {
        // reset fetch
        onClickRequest();
      });
    });
  };

  return (
    <form>
      Toggle note importance here: {noteId}
      <button value={"-"} onClick={onClickNoteId}>
        -
      </button>
      <button value={"+"} onClick={onClickNoteId}>
        +
      </button>
      <button onClick={onClickToggle}>Toggle</button>
    </form>
  );
};

export default function PartD({ onClickRequest, notesLen }) {
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
      <ToggleNote onClickRequest={onClickRequest} notesLen={notesLen} />
    </>
  );
}
