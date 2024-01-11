/* eslint-disable react/prop-types */
import { useRef } from "react";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";

import styles from "./TodoForm.module.css";
import { createTodo } from "../../features/todos";

const TodoForm = () => {
  const dispatch = useDispatch();
  const inputRef = useRef();
  console.log(inputRef);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!inputRef.current.value.trim()) return;

    const newTodo = {
      id: uuidv4(),
      task: inputRef.current.value,
      completed: false,
    };
    dispatch(createTodo(newTodo));
    inputRef.current.value = "";
  };

  return (
    <form className={styles.todoForm} onSubmit={handleSubmit}>
      <input
        ref={inputRef}
        className={styles.todoForm_input}
        type="text"
        placeholder="Entrer une nouvelle tâche..."
      />
    </form>
  );
};

export default TodoForm;
