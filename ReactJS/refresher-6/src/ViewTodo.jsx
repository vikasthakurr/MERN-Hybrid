import React from "react";
import { useSelector } from "react-redux";

const ViewTodo = () => {
  const todos = useSelector((state) => state.todos);
    console.log(todos);
  return (
    <div>
      {todos.map((todo) => (
        <div key={todo.id}>
          <p>{todo.text}</p>
        </div>
      ))}
    </div>
  );
};

export default ViewTodo;
