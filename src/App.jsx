import { useState } from "react";

import Clock from "./components/Clock/Clock";
import "./App.css";
import TodoList from "./components/TodoList/TodoList";

const DUMMY_DATA = [
  {
    id: 1,
    task: "Apprendre React",
    completed: true,
  },
  {
    id: 2,
    task: "Apprendre JavaScript",
    completed: false,
  },
  {
    id: 3,
    task: "Postuler à diverses offres d'emplois",
    completed: false,
  },
];

function App() {
  const [todos, setTodos] = useState(DUMMY_DATA);

  const handleCreate = (value) => {
    const newTodo = {
      id: value,
      task: value,
      completed: false,
    };
    setTodos((prevTodos) => [...prevTodos, newTodo]);
  };

  const handleCompleted = (id) => {
    setTodos((prevTodos) => {
      return prevTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        }

        return todo;
      });
    });
  };

  const handleDelete = (id) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.id !== id);
    });
  };

  return (
    <>
      <div className="wrapper">
        <Clock />
        <TodoList
          todos={todos}
          handleCompleted={handleCompleted}
          handleDelete={handleDelete}
          handleCreate={handleCreate}
        />
      </div>
    </>
  );
}

export default App;
