// src/App.jsx
import React from "react";
import useCounterStore from "./store.js";

function App() {
  const { count, increase, decrease, reset } = useCounterStore();

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Zustand Counter Example</h1>
      <h2>{count}</h2>
      <button onClick={increase}>➕ Increase</button>
      <button onClick={decrease}>➖ Decrease</button>
      <button onClick={reset}>🔄 Reset</button>
    </div>
  );
}

export default App;
