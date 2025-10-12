import React from "react";
import AddTodo from "./AddTodo";
import ViewTodo from "./ViewTodo";

const App = () => {
  return (
    <div>
      <AddTodo />
      <ViewTodo />
    </div>
  );
};

export default App;

//redux...global state management toolkit
//react redux toolkit
//store (empty container)
//reducer or slicer
//two hooks-->event handler on spot (jha pr event he whi pr resolution he)
//sst(single source of truth)
// informing guy two hooks (dispatcher and selector)
//dispatcher just transfering the event and its data to store (state, action-> payload.value)
//selectors (state -> whatever data u want that can be given by selectors)
