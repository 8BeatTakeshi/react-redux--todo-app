/* eslint-disable react/prop-types */
import { useDispatch } from "react-redux";

import styles from "./TodoItem.module.css";
import {
  completeTodo,
  deleteTodo,
  updateCompletedCount,
} from "../../features/todos";

const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();

  const handleComplete = (todo) => {
    if (todo.completed) {
      dispatch(updateCompletedCount(-1));
    } else {
      dispatch(updateCompletedCount(1));
    }
    dispatch(completeTodo(todo.id));
  };

  return (
    <div className={styles.todoItem}>
      <div
        className={`${styles.todoItem_check} ${
          todo.completed ? styles.completed : ""
        }`}
        onClick={() => handleComplete(todo)}
      >
        <img
          className={` ${
            todo.completed ? styles.completed_img : styles.todoItem_img
          }`}
          src="/src/assets/icon-check.svg"
          alt=""
        />
      </div>

      <div className={styles.todoItem_content}>
        <p
          className={`${styles.todoItem_text} ${
            todo.completed ? styles.todoItem_text_completed : ""
          }`}
        >
          {todo.task}
        </p>
        <button
          className={styles.todoItem_delete}
          onClick={() => dispatch(deleteTodo(todo.id))}
        >
          <i className="fas fa-trash" />
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
