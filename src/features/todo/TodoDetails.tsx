import React from "react";

import { useAppSelector } from "../../app/hooks";
import styles from "./TodoDetails.module.css";
import { selectSelectedTodo } from "./todoSlice";

const TodoDetails = () => {
  const selectedTodo = useAppSelector(selectSelectedTodo);
  return (
    <div className={styles.details}>
      {selectedTodo.title && (
        <>
          <h2>{selectedTodo.title}</h2>
          <p>Created at </p>
          <h3>{selectedTodo.created_at}</h3>
          <p>Updated at </p>
          <h3>{selectedTodo.updated_at}</h3>
        </>
      )}
    </div>
  );
};

export default TodoDetails;
