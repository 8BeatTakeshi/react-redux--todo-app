/* eslint-disable react/prop-types */
import styles from "./TodoItem.module.css";

const TodoItem = ({ todo, handleCompleted, handleDelete }) => {
  console.log(todo.id);
  return (
    <div className={styles.todoItem}>
      <div
        className={`${styles.todoItem_check} ${
          todo.completed ? styles.completed : ""
        }`}
        onClick={() => handleCompleted(todo.id)}
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
          onClick={() => handleDelete(todo.id)}
        >
          <i className="fas fa-trash" />
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
