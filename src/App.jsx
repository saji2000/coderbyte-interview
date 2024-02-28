import { useState } from "react";
import ColorSelector from "./components/ColorSelector";
import ButtonToggle from "./components/ButtonToggle";
import List from "./components/List";
import Paragraph from "./components/Paragraph";
import Counter from "./components/Counter";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <ButtonToggle />
      <ColorSelector />
      <List />
      <Paragraph />
      <Counter />
    </>
  );
}

export default App;
