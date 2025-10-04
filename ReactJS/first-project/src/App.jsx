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
//       {/* We pass both the state `name` and the function to update it `setName` down as props. */}
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
//         {/* The `ref` attribute connects our `ref2` object to this specific button element in the DOM. */}
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
//       {/* The input's `value` is always driven by the component's state. */}
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
//         {/* We attach the ref to the input element. The input now manages its own state. */}
//         <input id="input" type="text" ref={inputRef} />
//       </label>
//       <button type="submit">Submit</button>
//     </form>
//   );
// }
// export default UncontrolledInput;

// =================================================================================================
// CONCEPT 9: The `useLayoutEffect` Hook
// =================================================================================================
// import React, { useLayoutEffect, useRef } from "react";

// function App() {
//   const boxRef = useRef();

// `useLayoutEffect` runs synchronously *after* React has performed all DOM mutations, but *before*
// the browser has painted the result to the screen. This is in contrast to `useEffect`, which
// runs asynchronously after the browser paint.

// When to use `useLayoutEffect`:
// - When you need to read layout from the DOM (like an element's size or position) and then
//   synchronously re-render the component based on that information.
// - This helps avoid a "flicker" where the user first sees the initial state and then the updated state.

//   useLayoutEffect(() => {
//     // This code will execute before the browser paints the <div>.
//     // For example, we can measure the div and then apply styles.
//     console.log("useLayoutEffect: The box is now in the DOM, but not yet painted.");
//     boxRef.current.style.backgroundColor = "red";
//     boxRef.current.style.padding = "10px";
//   }, []); // Empty dependency array means this runs only once after the initial render.

//   return <div ref={boxRef}>useLayoutEffect Example</div>;
// }

// export default App;

// =================================================================================================
// CONCEPT 10: Exposing Child Component Functions with `useImperativeHandle`
// =================================================================================================
// import React, { useRef, useImperativeHandle, forwardRef } from "react";

// "forwardRef" allows a parent component to pass a ref down to one of its children.
// const Child = forwardRef((props, ref) => {
// `useImperativeHandle` customizes the instance value that is exposed to parent components when using `ref`.
// Instead of exposing the entire child component instance, you can expose a specific set of functions.
// This is useful for controlling which parts of the child can be called from the parent.
//   useImperativeHandle(ref, () => ({
//     // This object is what `ref.current` will point to in the parent component.
//     greet: () => alert("Hello! This function was called from the parent."),
//     sayHi: () => alert("Hi there!"),
//   }));

//   // The child component doesn't render anything itself in this example
//   return null;
// });

// const App = () => {
//   // Create a ref to hold the imperative handle of the Child component.
//   const childRef = useRef();

//   return (
//     <div>
//       <h2>Parent Component: Using `useImperativeHandle`</h2>
//       {/* The ref is passed to the child component. */}
//       <Child ref={childRef} />

//       {/* We can now call the functions exposed by the child's imperative handle. */}
//       <button onClick={() => childRef.current.greet()}>Call Greet</button>
//       <button onClick={() => childRef.current.sayHi()}>Call Say Hi</button>
//     </div>
//   );
// };

// export default App;

// =================================================================================================
// CONCEPT 11: Complex State Management with `useReducer`
// =================================================================================================
// import React, { useReducer } from "react";

// `useReducer` is an alternative to `useState`. It's generally preferred for managing complex
// state logic that involves multiple sub-values or when the next state depends on the previous one.

// 1. Define the initial state of your component.
// const initialState = { count: 0 };

// 2. Create a "reducer" function. This function takes the current state and an "action" object,
//    and it returns the *new* state. It should be a pure function.
// function reducer(state, action) {
//   switch (action.type) {
//     case "increment":
//       return { count: state.count + 1 };
//     case "decrement":
//       return { count: state.count - 1 };
//     default:
//       // It's important to handle unknown actions, usually by returning the current state.
//       return state;
//   }
// }

// const App = () => {
// 3. Call the `useReducer` hook, passing the reducer function and the initial state.
//    It returns the current state and a `dispatch` function.
//   const [state, dispatch] = useReducer(reducer, initialState);

//   return (
//     <>
//       <h1>useReducer Example</h1>
//       <p>Count: {state.count}</p>
//       {/*
//         4. To update the state, you call `dispatch` with an "action" object.
//            This action object is sent to your reducer function, which then computes the new state.
//       */}
//       <button onClick={() => dispatch({ type: "increment" })}>Increase</button>
//       <button onClick={() => dispatch({ type: "decrement" })}>Decrease</button>
//     </>
//   );
// };

// export default App;

// =================================================================================================
// CONCEPT 12: Handling Errors in Async Operations (`useEffect`)
// =================================================================================================
// import React, { useEffect, useState } from "react";

// React's Error Boundaries do NOT catch errors inside async code (like `fetch`), event handlers,
// or server-side rendering. You must handle these errors manually.

// const App = () => {
//   const [data, setData] = useState(null);
//   const [error, setError] = useState(null); // Initialize error state to null

//   useEffect(() => {
//     // It's a good practice to define the async function inside the effect.
//     async function fetchData() {
//       try {
//         // Attempt to fetch data from an API.
//         // Note: The URL is intentionally misspelled ("dumyjson") to trigger an error.
//         let response = await fetch("https://dumyjson.com/products");

//         // Check if the HTTP response status is not OK (e.g., 404, 500).
//         if (!response.ok) {
//           throw new Error(`HTTP error! Status: ${response.status}`);
//         }

//         const jsonData = await response.json();
//         setData(jsonData);
//       } catch (err) {
//         // If any error occurs in the `try` block (network error, HTTP error), it's caught here.
//         // We then update the `error` state to store the error message.
//         setError(err.message);
//       }
//     }

//     fetchData();
//   }, []); // Empty dependency array ensures this runs only once.

//   return (
//     <>
//       <h2>Handling Async Errors with `try...catch`</h2>
//       {/* Conditionally render content based on the error state. */}
//       {error ? (
//         <p style={{ color: "red" }}>Error fetching data: {error}</p>
//       ) : (
//         // Be careful with JSON.stringify(null), it will render "null".
//         // It's better to show a loading state or check if data exists.
//         <pre>{data ? JSON.stringify(data, null, 2) : "Loading..."}</pre>
//       )}
//     </>
//   );
// };

// export default App;

// =================================================================================================
// CONCEPT 13: Declarative Error Handling with Error Boundaries
// =================================================================================================
// import React from "react";
// import { ErrorBoundary } from "react-error-boundary"; // A popular library for error boundaries
// import ComponentWithError from "./ComponentwithError.jsx"; // Assume this component might crash

// An Error Boundary is a React component that catches JavaScript errors anywhere in its
// child component tree, logs those errors, and displays a fallback UI instead of the
// component tree that crashed.

// What they catch: Errors during rendering, in lifecycle methods, and in constructors.
// What they DON'T catch: Errors in event handlers, async code, or the error boundary itself.

// 1. Define a fallback component. This component gets rendered when an error is caught.
//    The library passes the `error` object as a prop.
// const ErrorFallback = ({ error }) => (
//   <div role="alert">
//     <h2>Something went wrong:</h2>
//     <pre style={{ color: "red" }}>{error.message}</pre>
//   </div>
// );

// const App = () => {
//   return (
//     <div>
//       <h1>Parent Component</h1>
//       <p>This component contains an error boundary.</p>
//       {/*
//         2. Wrap the part of your UI that might throw an error with the <ErrorBoundary> component.
//            If `ComponentWithError` (or any of its children) throws a rendering error,
//            the `ErrorFallback` component will be displayed instead.
//       */}
//       <ErrorBoundary FallbackComponent={ErrorFallback}>
//         <ComponentWithError />
//       </ErrorBoundary>
//     </div>
//   );
// };

// export default App;

// =================================================================================================
// CONCEPT 14: Client-Side Routing with `react-router-dom`
// =================================================================================================
// import React from "react";
// import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

// // Define components for different pages.
// function Home() {
//   return <h2>Home Page</h2>;
// }

// function About() {
//   return <h2>About Us Page</h2>;
// }

// const App = () => {
//   return (
//     // 1. `BrowserRouter` enables routing for the entire app. It uses the HTML5 history API
//     //    to keep your UI in sync with the URL.
//     <BrowserRouter>
//       <div>
//         {/* 2. `Link` is used to create navigation links. It's like an `<a>` tag but prevents
//              a full page reload, allowing for a single-page application (SPA) experience. */}
//         <nav>
//           <Link to="/">Home</Link> | <Link to="/about">About</Link>
//         </nav>

//         <hr />

//         {/* 3. `Routes` is a container for all your individual routes. */}
//         <Routes>
//           {/* 4. `Route` maps a URL path to a specific component.
//                - `path` defines the URL segment.
//                - `element` specifies the React component to render when the path matches. */}
//           <Route path="/" element={<Home />} />
//           <Route path="/about" element={<About />} />
//         </Routes>
//       </div>
//     </BrowserRouter>
//   );
// };

// export default App;

// =================================================================================================
// CONCEPT 15: Dynamic Routing with URL Parameters
// =================================================================================================
// import React from "react";
// import { BrowserRouter, Routes, Route, useParams, Link } from "react-router-dom";

// // This component will be rendered for dynamic user profiles.
// function UserProfile() {
//   // The `useParams` hook reads the dynamic parameters from the URL.
//   // The key (`id`) matches the parameter name defined in the Route path (`:id`).
//   const { id } = useParams();
//   return <h2>Displaying profile for User ID: {id}</h2>;
// }

// const App = () => {
//   return (
//     <BrowserRouter>
//       <nav>
//         <Link to="/user/1">User 1</Link> | <Link to="/user/2">User 2</Link> |{" "}
//         <Link to="/user/3">User 3</Link>
//       </nav>
//       <Routes>
//         {/* The colon `:` in the path indicates a dynamic segment.
//             `react-router-dom` will match any value in this part of the URL
//             (e.g., "/user/1", "/user/jane", "/user/123-abc"). */}
//         <Route path="/user/:id" element={<UserProfile />} />
//       </Routes>
//     </BrowserRouter>
//   );
// };

// export default App;

// =================================================================================================
// CONCEPT 16: Protected Routes for Authentication
// =================================================================================================
// import React from "react";
// import { BrowserRouter, Routes, Route, Navigate, Link } from "react-router-dom";

// // This is a wrapper component that protects a route.
// // It checks for an authentication condition (`isLoggedIn`).
// // If the user is logged in, it renders the `children` (the actual protected component).
// // If not, it redirects the user to a different page using the `Navigate` component.
// function ProtectedRoute({ isLoggedIn, children }) {
//   if (!isLoggedIn) {
//     // `Navigate` is a component that changes the current location when it renders.
//     return <Navigate to="/login" replace />;
//   }
//   return children;
// }

// // --- Page Components ---
// function HomePage() {
//   return <h2>Home Page (Public)</h2>;
// }
// function LoginPage() {
//   return <h2>Login Page (Public)</h2>;
// }
// function DashboardPage() {
//   return <h2>Dashboard (Protected)</h2>;
// }

// const App = () => {
//   // In a real app, this would come from state, context, or a custom hook.
//   const isLoggedIn = true; // Try changing this to `false` to see the redirect.

//   return (
//     <BrowserRouter>
//       <nav>
//         <Link to="/">Home</Link> | <Link to="/dashboard">Dashboard</Link>
//       </nav>
//       <Routes>
//         <Route path="/" element={<HomePage />} />
//         <Route path="/login" element={<LoginPage />} />
//         <Route
//           path="/dashboard"
//           element={
//             <ProtectedRoute isLoggedIn={isLoggedIn}>
//               <DashboardPage />
//             </ProtectedRoute>
//           }
//         />
//       </Routes>
//     </BrowserRouter>
//   );
// };
// export default App;

// React.memo

// useMemo & useCallback

// Code Splitting (React.lazy & Suspense)

// Virtualization (react-window / react-virtualized)

// Testing in React

// Jest

// React Testing Library

// Snapshot Testing

// Mocking API Calls

// End-to-End (E2E) Testing (Cypress / Playwright)

// Styling in React

// CSS Modules

// Styled Components

// Emotion

// Tailwind CSS

// Scalable Styling Best Practices

// Server-Side Rendering & Frameworks

// SSR vs CSR vs SSG vs ISR

// Next.js

// Remix

// Gatsby

// Advanced State Management

// Redux Toolkit Query (RTK Query)

// Apollo Client (GraphQL)

// React Query / TanStack Query

// Comparison: Redux vs React Query vs Zustand

// React with TypeScript

// Props & State

// Custom Hooks

// Context API

// Higher-Order Components
