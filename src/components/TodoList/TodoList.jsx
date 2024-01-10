/* eslint-disable react/prop-types */
import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";
import styles from "./TodoList.module.css";

const TodoList = ({ todos, handleCompleted, handleDelete, handleCreate }) => {
  return (
    <>
      <TodoForm handleCreate={handleCreate} />
      <div className={styles.todoList}>
        {todos.map((todo) => (
          <TodoItem
            todo={todo}
            key={todo.id}
            handleCompleted={handleCompleted}
            handleDelete={handleDelete}
          />
        ))}
      </div>
    </>
  );
};

export default TodoList;
