import React from "react";
import "./App.scss";
import InputContainer from "./components/input-container";
import DummyContainer from "./components/dummy-container";

const COLOURS_HASH: Record<string, string> = {
  G: 'green',
  R: 'red',
  Y: 'yellow',
}

function App() {
  const [nodeColours, setNodeColours] = React.useState(Array(9).fill("lightgray"));

  // str validated and length === 9
  function changeColours(str: string) {
    const newColours = [];
    for (let i = 0; i < 9; i++) {
      const char = str.charAt(i);
      const colour = COLOURS_HASH[char]
      newColours.push(colour)
    }
    setNodeColours(newColours);
  }

  return (
    <div className="App">
      <DummyContainer nodeColours={nodeColours} />
      <InputContainer changeColours={changeColours} />
    </div>
  );
}

export default App;
