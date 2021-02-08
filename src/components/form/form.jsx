import React from "react";
import "./form.css";

const Form = ({
  inputText,
  setInputText,
  todos,
  setTodos,
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
  const priorityHandler = (e) => {
    setPriority(e.target.value);
    console.log("priority", priority);
  };

  return (
    <form className="form-container">
      <input
        value={inputText}
        onChange={inputTextHandler}
        type="text"
        className="form-el text-input"
        placeholder="Type your todo here"
      />
      <select className="form-el priority-input" onChange={priorityHandler}>
        <option value="P0">P0</option>
        <option value="P1">P1</option>
        <option value="P2">P2</option>
        <option value="P3">P3</option>
      </select>
      <button
        onClick={submitTodoHandler}
        className="form-el form-btn"
        type="submit"
      >
        <i className="fas fa-plus-square"></i>
      </button>
    </form>
  );
};

export default Form;
