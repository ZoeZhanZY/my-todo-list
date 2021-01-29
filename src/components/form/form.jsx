import React from "react";

const Form = ({
  inputText,
  setInputText,
  todos,
  setTodos,
  setStatus,
  setPriority,
  priority,
}) => {
  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };
  const submitTodoHandler = (e) => {
    e.preventDefault();
    setTodos([
      {
        text: inputText,
        completed: false,
        id: Math.random() * 1000,
        priority,
      },
      ...todos,
    ]);
    setInputText("");
  };
  const statusHandler = (e) => {
    setStatus(e.target.value);
  };
  const priorityHandler = (e) => {
    setPriority(e.target.value);
    console.log("priority", priority);
  };
  return (
    <form>
      <input
        value={inputText}
        onChange={inputTextHandler}
        type="text"
        className="todo-input"
      />
      <select className="todo-input" onChange={priorityHandler}>
        <option value="P0">P0</option>
        <option value="P1">P1</option>
        <option value="P2">P2</option>
        <option value="P3">P3</option>
      </select>

      <button onClick={submitTodoHandler} className="todo-button" type="submit">
        <i className="fas fa-plus-square"></i>
      </button>

      <div className="select">
        <select onChange={statusHandler} name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  );
};

export default Form;
