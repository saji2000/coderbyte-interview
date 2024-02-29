import { useState } from "react";
import ColorSelector from "./components/ColorSelector";
import ButtonToggle from "./components/ButtonToggle";
import List from "./components/List";
import Paragraph from "./components/Paragraph";
import Counter from "./components/Counter";
import ContextApi from "./components/ContextApi";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  return (
    <>
      <ButtonToggle />
      <ColorSelector />
      <List />
      <Paragraph />
      <Counter />
      <ContextApi />
    </>
  );
}

export default App;
