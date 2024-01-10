/* eslint-disable react/prop-types */
import React, { useRef } from "react";

import styles from "./TodoForm.module.css";

const TodoForm = ({ handleCreate }) => {
  const inputRef = useRef();
  console.log(inputRef);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!inputRef.current.value.trim()) return;

    handleCreate(inputRef.current.value);
    inputRef.current.value = "";
  };

  return (
    <form className={styles.todoForm} onSubmit={handleSubmit}>
      <input
        ref={inputRef}
        className={styles.todoForm_input}
        type="text"
        placeholder="Enter a new todo..."
      />
    </form>
  );
};

export default TodoForm;
