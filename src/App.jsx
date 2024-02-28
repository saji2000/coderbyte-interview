import { useState } from "react";
import ColorSelector from "./components/ColorSelector";
import ButtonToggle from "./components/ButtonToggle";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <ButtonToggle />
      <ColorSelector />
    </>
  );
}

export default App;
