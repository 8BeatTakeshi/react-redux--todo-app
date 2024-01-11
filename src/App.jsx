import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Clock from "./components/Clock/Clock";
import "./App.css";
import TodoList from "./components/TodoList/TodoList";
import { updateCompletedCount } from "./features/todos";

function App() {
  const todosState = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  useEffect(() => {
    const countCompletedTask = (todos) => {
      let count = todos.filter((todo) => todo.completed === true).length;

      dispatch(updateCompletedCount(count));
    };
    countCompletedTask(todosState.todos);
  }, []);

  return (
    <>
      <div className="wrapper">
        <Clock />
        <TodoList />
      </div>
    </>
  );
}

export default App;
