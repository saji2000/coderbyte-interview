import React, { useState } from "react";

const ButtonToggle = () => {
  const [toggle, setToggle] = useState(false);

  const handleClick = () => {
    setToggle(!toggle);
  };

  return (
    <div>
      <h3>Button Toggle</h3>
      <button type="button" onClick={handleClick}>
        {toggle ? "ON" : "OFF"}
      </button>
    </div>
  );
};

export default ButtonToggle;
