import React from "react";
import Todo from "./todo/Todo";
import "./todolist.css";

const TodoList = ({ filteredTodos, completeHandler, deleteHandler }) => {
  const renderTodoList = () => {
    return filteredTodos.map((todo) => (
      <Todo
        text={todo.text}
        todo={todo}
        priority={todo.priority}
        deleteHandler={deleteHandler}
        completeHandler={completeHandler}
      />
    ));
  };

  const renderContent = () => {
    console.log(filteredTodos.length);
    if (filteredTodos.length > 0) {
      return renderTodoList();
    } else {
      return (
        <div className="no-todo-notice">
          <p>No todo on the list yet</p>
        </div>
      );
    }
  };

  return (
    <>
      <div className="todo-container ">
        <ul className="todo-list">{renderContent()}</ul>
      </div>
    </>
  );
};

export default TodoList;
