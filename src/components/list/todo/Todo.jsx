import React from "react";
import "./todo.css";

const Todo = ({ text, todo, priority, completeHandler, deleteHandler }) => {
  return (
    <div className="todo">
      <li className={`todo-item ${todo.completed ? "completed" : ""}`}>
        {priority} - {text}
      </li>
      <button
        onClick={() => completeHandler(todo.id)}
        className={`btn  ${
          todo.completed ? " completed-btn" : "uncompleted-btn"
        }`}
      >
        <i className="fas fa-check"></i>
      </button>
      <button onClick={() => deleteHandler(todo.id)} className="trash-btn">
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
};

export default Todo;
