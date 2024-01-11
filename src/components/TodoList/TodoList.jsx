/* eslint-disable react/prop-types */
import { useDispatch, useSelector } from "react-redux";

import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";
import styles from "./TodoList.module.css";
import { clearAllCompletedTodo } from "../../features/todos";

const TodoList = () => {
  const todosState = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  return (
    <>
      <div className={styles.todo_info}>
        <p className={styles.task_completed}>
          {`${todosState.completedCount} tâche${
            todosState.completedCount > 1 ? "s" : ""
          } complétée${todosState.completedCount > 1 ? "s" : ""}`}
        </p>
        <button
          onClick={() => dispatch(clearAllCompletedTodo())}
          className={styles.clear_all}
        >
          Effacer les tâches complétées
        </button>
      </div>
      <TodoForm />
      <div className={styles.todoList}>
        {todosState.todos.map((todo) => (
          <TodoItem todo={todo} key={todo.id} />
        ))}
      </div>
    </>
  );
};

export default TodoList;
