// =================================================================================================
// NOTE FOR STUDENTS: This file contains examples of various React concepts.
// Each concept is in a commented-out block. To experiment with a concept,
// you can uncomment the relevant block and comment out the others.
// =================================================================================================


// =================================================================================================
// CONCEPT 1: Event Handling in React
// =================================================================================================
// import React from "react";

// const App = () => {
  // --- Why we don't use traditional DOM methods ---
  // In React, we don't directly manipulate the DOM (like using document.getElementById).
  // React uses a "virtual DOM", which is a lightweight copy of the real DOM.
  // Direct DOM manipulation can interfere with React's ability to efficiently update the UI.
  // const btn = document.getElementById("btn");
  // btn.addEventListener("click",()=>{
  //   console.log("btn is clicked bhaiya")
  // })

  // --- The React Way: Synthetic Events ---
  // Instead, React provides "synthetic events" that are wrappers around the browser's native events.
  // We use camelCased attributes like `onClick` directly in our JSX.
//   const handleClick = () => {
//     console.log("btn clicked bhaiya");
//   };
//   return (
//     <div>
//       <button onClick={handleClick}>Click me</button>
//     </div>
//   );
// };

// export default App;


// =================================================================================================
// CONCEPT 2: Conditional Rendering
// =================================================================================================
// import React from "react";
// import Welcome from "./Welcome"; // A component to show on success
// import Error from "./Error";     // A component to show on error

// const App = () => {
  // We can use JavaScript expressions inside JSX to render content conditionally.
  // Here, we use a ternary operator. If `isLoggedIn` is true, it renders the <Welcome /> component.
  // Otherwise, it renders the <Error /> component.
//   let isLoggedIn = true;
//   return <div>{isLoggedIn ? <Welcome /> : <Error />}</div>;
// };

// export default App;


// =================================================================================================
// CONCEPT 3: Rendering Lists with `map()` and `key` prop
// =================================================================================================
// import React from "react";

// const App = () => {
  // To render a list of items, we can use the `map()` array method.
  // `map()` transforms each item in the `users` array into a `<li>` element.
//   const users = ["vikas", "vijay", "manish"];
//   return (
//     <ul>
      /*
       * --- The Importance of the `key` Prop ---
       * When you render a list, you must provide a unique `key` prop for each item.
       * React uses this `key` to identify which items have changed, are added, or are removed.
       * This helps React update the UI efficiently. Using the array `index` as a key is
       * often an anti-pattern, especially if the list can be reordered, but it's acceptable
       * for simple, static lists. A unique ID from your data (e.g., user.id) is always better.
       */
//       {users.map((user, index) => (
//         <li key={index}>{user}</li>
//       ))}
//     </ul>
//   );
// };

// export default App;


// =================================================================================================
// CONCEPT 4: Passing Data with Props
// =================================================================================================
// import React from "react";
// import Welcome from "./Welcome";
// import Error from "./Error";

// const App = () => {
  // "Props" (short for properties) are how you pass data from a parent component to a child component.
  // It's like passing arguments to a function.
  // Here, the `App` component is passing `name` and `age` props to the `Error` component.
//   return (
//     <div>
//       <Error name="vikas" age="35" />
//       <Error name="vijay" age="24" />
//     </div>
//   );
// };

// export default App;


// =================================================================================================
// CONCEPT 5: State Management with the `useState` Hook
// =================================================================================================
// import React from "react";
// import { useState } from "react";

// const App = () => {
  // The `useState` hook is used to add state to a functional component.
  // `useState(0)` initializes a state variable `count` with an initial value of 0.
  // It returns an array with two elements: the current state value (`count`) and a function to update it (`setCount`).
//   const [count, setCount] = useState(0);

//   function increase() {
    // When you call the `setCount` function, React does two things:
    // 1. It updates the `count` state variable.
    // 2. It re-renders the component to reflect the new state in the UI.
    // Note: The `console.log(count)` here will show the *old* value because state updates are asynchronous.
//     setCount(count + 1);
//     console.log(count);
//   }

//   return (
//     <div>
//       <p>value of A: {count}</p>
//       <button onClick={increase}>increase</button>
//     </div>
//   );
// };

// export default App;


// =================================================================================================
// CONCEPT 6: Lifting State Up
// =================================================================================================
// import React from "react";
// import { useState } from "react";
// import Error from "./Error";
// import Welcome from "./Welcome";

// const App = () => {
  // Sometimes, multiple components need to share and manage the same state.
  // The common practice is to "lift the state up" to their closest common ancestor.
  // Here, `name` state is managed in `App`, but it's updated by the `Error` component
  // and displayed by both `App` and the `Welcome` component.
//   const [name, setName] = useState("");

//   return (
//     <>
      {/* We pass both the state `name` and the function to update it `setName` down as props. */}
//       <Error name={name} setName={setName} />
//       <p>value of input coming from child is {name}</p>
//       <Welcome name={name} />
//     </>
//   );
// };

// export default App;


// =================================================================================================
// CONCEPT 7: The `useRef` Hook and Direct DOM Access (with common pitfalls)
// =================================================================================================
// import { useState, useRef, useEffect } from "react"; // useEffect is needed for the correct approach
// import React from "react";

// function App() {
//   const [count, setCount] = useState(0);

  // `useRef` can hold a mutable value that does not cause a re-render when it changes.
  // Here, `ref` is used like an instance variable to count clicks without re-rendering.
//   const ref = useRef(0);

  // `useRef` can also be used to get direct access to a DOM element.
  // We initialize it with `undefined` and attach it to an element using the `ref` attribute.
//   const ref2 = useRef();

  // --- THE PROBLEM ---
  // The following line will cause a "TypeError: Cannot read properties of undefined (reading 'style')"
  // WHY? Because this code runs during the component's render phase. At this point, the JSX
  // has not been turned into DOM elements yet, so `ref2.current` is still `undefined`.
  // The ref is only connected to the <button> *after* the component renders.
//   // if (ref2.current) { // This `if` check prevents the crash, but it's still not the right way to do it.
//   //   ref2.current.style.backgroundColor = "red";
//   // }

  // --- THE SOLUTION: `useEffect` ---
  // To interact with a DOM element via a ref, you must do it *after* the component has rendered.
  // The `useEffect` hook is the correct place for this kind of "side effect".
//   useEffect(() => {
//     // This code runs *after* the component has mounted and the ref is connected.
//     if (ref2.current) {
//       ref2.current.style.backgroundColor = "red";
//     }
//   }, []); // The empty array `[]` means this effect runs only once, after the initial render.


//   const handleIncrement = () => {
//     setCount(count + 1);
//     ref.current = ref.current + 1;
//   };

//   return (
//     <>
//       <div className="card">
        {/* The `ref` attribute connects our `ref2` object to this specific button element in the DOM. */}
//         <button ref={ref2} onClick={handleIncrement}>
//           count is {count}
//         </button>
//         <p>this is dummy para</p>
//       </div>
//     </>
//   );
// }

// export default App;


// =================================================================================================
// CONCEPT 8: Controlled vs. Uncontrolled Components
// =================================================================================================

// --- Controlled Components ---
// A component is "controlled" when React is the single source of truth for the form input's value.
// The component's state (`useState`) dictates the input's value.
// PROS: Allows for real-time validation, formatting, and tight control over the input.
// CONS: Can be more verbose for simple forms.

// import React from "react";
// import { useState } from "react";

// const ControlledForm = () => {
  // The `value` state variable is the single source of truth.
//   const [value, setValue] = useState("");

  // The `onChange` handler updates the state on every keystroke.
//   function handleChange(e) {
//     setValue(e.target.value);
//   }
//   return (
//     <div>
      {/* The input's `value` is always driven by the component's state. */}
//       <input
//         type="text"
//         value={value}
//         onChange={handleChange}
//         placeholder="enter value"
//       ></input>
//       <p>what you typed can i guess it is: {value}</p>
//     </div>
//   );
// };

// export default ControlledForm;


// --- Uncontrolled Components ---
// A component is "uncontrolled" when the DOM manages the form data itself.
// We use a `ref` (`useRef`) to "pull" the value from the DOM when we need it (e.g., on form submission).
// PROS: Simpler to implement for basic forms where you only need the final value.
// CONS: Less control over the input's value in real-time.

// import React, { useRef } from "react";

// function UncontrolledInput() {
  // We create a ref to hold a reference to the input DOM element.
//   const inputRef = useRef(null);

//   const handleSubmit = (event) => {
    // We prevent the default form submission behavior.
//     event.preventDefault();
    // We access the input's current value directly from the DOM via the ref.
//     alert("A name was submitted: " + inputRef.current.value);
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <label>
//         Name:
        {/* We attach the ref to the input element. The input now manages its own state. */}
//         <input id="input" type="text" ref={inputRef} />
//       </label>
//       <button type="submit">Submit</button>
//     </form>
//   );
// }
// export default UncontrolledInput;
