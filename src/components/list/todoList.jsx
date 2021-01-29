import React from "react";
import Todo from "./Todo";

const TodoList = ({ todos, setTodos, filteredTodos, setFilteredTodos }) => {
  const sortHandler = () => {
    const sortedTodos = [...filteredTodos];

    sortedTodos.sort((a, b) => {
      const aPriority = parseInt(a.priority[1]);
      const bPriority = parseInt(b.priority[1]);

      return aPriority - bPriority;
    });

    setFilteredTodos(sortedTodos);
  };

  return (
    <>
      <div>
        <button onClick={sortHandler}>sort</button>
      </div>
      <div className="todo-container ">
        <ul className="todo-list">
          {filteredTodos.map((todo) => (
            <Todo
              setTodos={setTodos}
              key={todo.id}
              text={todo.text}
              todos={todos}
              todo={todo}
              filteredTodos={filteredTodos}
              c
              priority={todo.priority}
            />
          ))}
        </ul>
      </div>
    </>
  );
};

export default TodoList;
