// App.jsx
import React, { useRef, useImperativeHandle, forwardRef } from "react";

const Child = forwardRef((props, ref) => {
  useImperativeHandle(ref, () => ({
    sayHello: () => alert("Hello from Child!"),
  }));
  return <p>I am child</p>;
});

function App() {
  const childRef = useRef();

  return (
    <>
      <h2>useImperativeHandle Example</h2>
      <Child ref={childRef} />
      <button onClick={() => childRef.current.sayHello()}>Call Child</button>
    </>
  );
}

export default App;
