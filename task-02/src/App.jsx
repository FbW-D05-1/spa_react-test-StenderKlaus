import { useState } from "react";
import "./style.css";

function App() {
  const [transformPoints, setTransformPoints] = useState(400);

  const handleButtonClick = () => {
    if (transformPoints > -100) {
      setTransformPoints(transformPoints - 50);
    }
  };

  return (
    <div className="App">
      <h1>Move the Box up</h1>
      <button onClick={handleButtonClick}>Move Up</button>
      <div
        className="box"
        style={{
          transform: `translateY(${transformPoints}px)`,
        }}
      />
    </div>
  );
}

export default App;