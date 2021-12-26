import React, { useState } from "react";

const Checkbox = ({ idx, checkUpdate }) => {
  const [checked, setCheck] = useState("");

  const handleClick = () => {
    setCheck(!checked);
    checkUpdate(idx);
  };

  return (
    <div>
      <input type="checkbox" checked={checked} onChange={handleClick} />
    </div>
  );
};

export default Checkbox;
