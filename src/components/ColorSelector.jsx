import React, { useState } from "react";

function ColorSelector() {
  const [color, setColor] = useState("red");
  const handleChange = (e) => {
    setColor(e.target.value);
  };
  return (
    <div>
      <h3>Color Selector</h3>
      <select value={color} onChange={handleChange}>
        <option value="red">Red</option>
        <option value="blue">Blue</option>
        <option value="green">Green</option>
      </select>
      <p>You selected {color}</p>
    </div>
  );
}

export default ColorSelector;
