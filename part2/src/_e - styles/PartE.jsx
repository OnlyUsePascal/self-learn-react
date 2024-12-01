import { useState } from "react";
import "./style.css";

const Notification = ({ message }) => {
  if (message === null) {
    return null;
  }

  return <div className="error">{message}</div>;
};

export default function PartE() {
  const [idx, setIdx] = useState(0);
  const inlineStyles = [
    {
      color: "green",
      fontStyle: "italic",
      fontSize: 16,
    },
    {
      color: "blue",
      fontStyle: "oblique",
      fontSize: 20,
    },
  ];

  const changeStyle = (e) => {
    e.preventDefault();
    setIdx((idx + 1) % inlineStyles.length);
  };

  return (
    <>
      <h1>Part E - Adding style</h1>
      <h4>A blue header 4</h4>
      <p className="note">A element with matching class</p>
      <Notification message={"big ass error"} />
      <p style={inlineStyles[idx]}>Testing inline style</p>
      <button onClick={changeStyle}>Toggle style</button>
    </>
  );
}
