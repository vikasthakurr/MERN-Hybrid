import React from "react";
import useCounterStore from "./store";

const App2 = () => {
  const { count } = useCounterStore();
  return <div>count is :{count}</div>;
};

export default App2;
