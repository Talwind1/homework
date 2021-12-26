import react, { useState } from "react";

function Text({ text, size }) {
  let shortText = text.substring(0, size);

  const [seenText, setText] = useState(shortText);

  const onButton = () => {
    const newText = seenText === shortText ? text : shortText;
    setText(newText);
  };

  return (
    <div className="Text">
      <button onClick={onButton}>Click</button>
      <h1>{seenText}</h1>
    </div>
  );
}

export default Text;
