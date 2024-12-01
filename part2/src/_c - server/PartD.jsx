import axios from "axios";
import { useState } from "react";
import axiosService from "./axiosService";

// const BASE_URL = "http://localhost:3001/notes";

const NewNote = ({ onClickRequest }) => {
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

    axiosService.post("/notes", newNote).then((res) => {
      onClickRequest();
      setNewNote("");
    });
  };

  return (
    <li>
      New note here:
      <input type="text" value={newNoteContent} onChange={onChangeNewNote} />
      <button onClick={onClickNewNote} type="submit">
        Submit
      </button>
    </li>
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
    // const putUrl = BASE_URL + `/${noteId}`;
    const endpoint = `/notes/${noteId}`;

    axiosService.getOne(endpoint).then((res) => {
      // assume things is right
      const note = res.data;
      const newNote = { ...note, important: !note.important };

      axiosService.put(endpoint, newNote).then((res) => {
        // reset fetch
        onClickRequest();
      });
    });
  };

  return (
    <li>
      Toggle note importance here: {noteId}
      <button value={"-"} onClick={onClickNoteId}>
        -
      </button>
      <button value={"+"} onClick={onClickNoteId}>
        +
      </button>
      <button onClick={onClickToggle}>Toggle</button>
    </li>
  );
};

const DeleteNote = ({ onClickRequest }) => {
  const [id, setId] = useState("");
  const [status, setStatus] = useState("Idle");

  const onChangeId = (e) => setId(e.target.value);

  const onClickDelete = async () => {
    setStatus("Pending...");

    await new Promise((res, rej) => setTimeout(res, 1000));

    axiosService
      .delete(`/notes/${id}`)
      .then((res) => {
        setStatus("Done!");
        onClickRequest();
      })
      .catch((rej) => {
        setStatus("Failed :(");
        alert(rej.message);
      });
  };

  return (
    <li>
      Note id here:
      <input type="text" value={id} onChange={onChangeId} />
      <button onClick={onClickDelete}>Delete</button>
      || Status: {status}
    </li>
  );
};

export default function PartD({ onClickRequest, notesLen }) {
  return (
    <>
      <h1>D - More than GET</h1>
      <NewNote onClickRequest={onClickRequest} />
      <ToggleNote onClickRequest={onClickRequest} notesLen={notesLen} />
      <DeleteNote onClickRequest={onClickRequest}/>
    </>
  );
}
