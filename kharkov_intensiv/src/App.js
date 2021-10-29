import React, { useState } from "react";
import "./App.css";
import TitleShow from "./components/Title";

const focus = (e) => {
  console.log(e);
  return <TitleShow />;
};

// const [state, setState] = useState({});

function App() {
  return (
    <div>
      <h1>Hello My Many project</h1>
      <button onClick={focus}>click me </button>
    </div>
  );
}

export default App;
