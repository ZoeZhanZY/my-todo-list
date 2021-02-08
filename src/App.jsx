import React, { useState, useEffect } from "react";
import "./App.css";
import Form from "./components/form/form";
import Filter from "./components/filter/filter";
import TodoList from "./components/list/todoList";

function App() {
  const [inputText, setInputText] = useState("");
  const [priority, setPriority] = useState("P0");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("All");
  const [filteredTodos, setFilteredTodos] = useState([]);

  useEffect(() => {
    getLocalTodos();
  }, []);

  useEffect(() => {
    filterHandler();
    saveLocalTodos();
  }, [todos, status]);

  // save to local
  const saveLocalTodos = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };
  const getLocalTodos = () => {
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
      let todoLocal = JSON.parse(localStorage.getItem("todos"));
      setTodos(todoLocal);
    }
  };

  //for Todo
  const deleteHandler = (deletedId) => {
    setTodos(todos.filter((el) => el.id !== deletedId));
  };

  const completeHandler = (completedId) => {
    setTodos(
      todos.map((item) => {
        if (item.id === completedId) {
          return { ...item, completed: !item.completed };
        }
        return item;
      })
    );
  };

  //for TodoList

  //for form
  const filterHandler = () => {
    switch (status) {
      case "Completed":
        setFilteredTodos(todos.filter((todo) => todo.completed === true));
        break;
      case "Uncompleted":
        setFilteredTodos(todos.filter((todo) => todo.completed === false));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  };

  const statusHandler = (e) => {
    setStatus(e.target.textContent);
  };

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
    <div className="App">
      <header>
        <h1>My Todo List</h1>
      </header>
      <Form
        todos={todos}
        setTodos={setTodos}
        inputText={inputText}
        setInputText={setInputText}
        setStatus={setStatus}
        priority={priority}
        setPriority={setPriority}
      />
      <Filter
        statusHandler={statusHandler}
        sortHandler={sortHandler}
        status={status}
      />
      <TodoList
        todos={todos}
        setTodos={setTodos}
        filteredTodos={filteredTodos}
        setFilteredTodos={setFilteredTodos}
        setStatus={setStatus}
        priority={priority}
        setPriority={setPriority}
        deleteHandler={deleteHandler}
        completeHandler={completeHandler}
      />
    </div>
  );
}

export default App;
