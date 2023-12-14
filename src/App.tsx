import React, { MouseEvent } from "react";
import "./App.scss";
import InputContainer from "./components/input-container";
import DummyContainer from "./components/dummy-container";
import Header from "./components/header";

const COLOURS_HASH: Record<string, string> = {
  G: "green",
  R: "red",
  Y: "yellow",
};

const R2D = 180 / Math.PI;

function App() {
  const spinnerRef = React.useRef<HTMLDivElement | null>(null);

  const [nodeColours, setNodeColours] = React.useState(
    Array(9).fill("lightgray")
  );
  const [isSpinning, toggleSpinning] = React.useState(false);
  const [angle, setAngle] = React.useState(0);
  const [startingAngle, setStartingAngle] = React.useState(0);
  const [rotation, setRotation] = React.useState(0);
  const [center, setCenter] = React.useState({ x: 0, y: 0 });

  // str validated and length === 9
  function changeColours(str: string) {
    const newColours = [];
    for (let i = 0; i < 9; i++) {
      const char = str.charAt(i);
      const colour = COLOURS_HASH[char];
      newColours.push(colour);
    }
    setNodeColours(newColours);
  }

  function saveStartingPoint(e: MouseEvent) {
    e.preventDefault();
    if(spinnerRef.current){
      let rect = spinnerRef.current.getBoundingClientRect();
      const { top, left, height, width } = rect;
      setCenter({
        x: left + width / 2,
        y: top + height / 2,
      });
      const x = e.clientX - center.x;
      const y = e.clientY - center.y;
      setStartingAngle(R2D * Math.atan2(y, x));
      toggleSpinning(true);
    }
  }

  function stopSpin(e: MouseEvent) {
    e.preventDefault();
    toggleSpinning(false);
    setAngle((prev) => prev + rotation);
  }

  function spin(e: MouseEvent) {
    e.preventDefault();
    if (spinnerRef.current && isSpinning) {
      let x = e.clientX - center.x,
        y = e.clientY - center.y,
        d = R2D * Math.atan2(y, x);
      const _rotation = d - startingAngle;

      setRotation(d - startingAngle);
      return (spinnerRef.current.style.transform =
        "rotate(" + (_rotation + angle) + "deg)");
      // return (spinnerRef.current.style.transform =
      //   "translate(-50%, -50%) rotate(" + (_rotation + angle) + "deg)");
    }
  }

  return (
    <div className="App">
      <Header />
      <div className="content">
        <div className="main">
          <div
            ref={spinnerRef}
            className="spin-con"
            onMouseDown={saveStartingPoint}
            onMouseMove={spin}
            onMouseUp={stopSpin}
          >
            <DummyContainer nodeColours={nodeColours} />
          </div>
        </div>
          <p className="spin-text">{` --- Spin me --- `}</p>
        <InputContainer changeColours={changeColours} />
      </div>
    </div>
  );
}

export default App;
