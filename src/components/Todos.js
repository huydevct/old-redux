import React, { useState } from "react";
import TodoForm from "./TodoForm";

const Todos = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "Viec 1",
      completed: false,
    },
    {
      id: 2,
      title: "Viec 2",
      completed: false,
    },
    {
      id: 3,
      title: "Viec 3",
      completed: false,
    },
  ]);
  return (
    <div className="todo-list">
        <TodoForm />
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.title} 
            <input type="checkbox"/>
            <button>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todos;
