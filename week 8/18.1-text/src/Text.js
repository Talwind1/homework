import react, { useState } from "react";

function Text({ text, size }) {
  if (text.length <= size) {
    return <p>{text}</p>;
  }

  const shortText = text.substring(0, size);
  //if(hidden) {return ()}
  const [hidden, setHidden] = useState(true); //if the text is linger

  const onButton = () => {
    const newText = seenText === shortText ? text : shortText;
    setText(newText);
  };

  return (
    <div className="Text" style={{ padding: "20rem" }}>
      <span
        role="button"
        onClick={onButton}
        style={{ color: "blue", cursor: "pointer" }}
      >
        Click
      </span>
      <h1>{seenText}</h1>
    </div>
  );
}

export default Text;
