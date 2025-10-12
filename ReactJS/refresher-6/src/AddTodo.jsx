import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "./reducer/TodoSlice";

const AddTodo = () => {
  const [inputText, setInputText] = useState("");

  const dispatch = useDispatch();

  const handleClick = (e) => {
    e.preventDefault();
    if (inputText == "") return;
    dispatch(addTodo({ text: inputText }));
    setInputText("");
  };
  return (
    <div>
      <input
        type="text"
        value={inputText}
        placeholder="enter task"
        onChange={(e) => setInputText(e.target.value)}
      ></input>
      <button onClick={handleClick}>Add</button>
    </div>
  );
};

export default AddTodo;
