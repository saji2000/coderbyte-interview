import { useState } from "react";

const Paragraph = () => {
  const [text, setText] = useState("");
  const handleChange = (e) => {
    setText(e.target.value);
  };
  return (
    <div>
      <h3>Paragrpah</h3>
      <input type="text" value={text} onChange={handleChange} />
      <p>{text}</p>
    </div>
  );
};

export default Paragraph;
