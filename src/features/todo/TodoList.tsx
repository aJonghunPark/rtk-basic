import React, { useEffect } from "react";

import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { fetchAsyncProf } from "../login/loginSlice";
import TodoItem from "./TodoItem";
import styles from "./TodoList.module.css";
import { fetchAsyncGet, selectTodos } from "./todoSlice";

const TodoList = () => {
  const todos = useAppSelector(selectTodos);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const fetchTodoProf = async () => {
      await dispatch(fetchAsyncGet());
      await dispatch(fetchAsyncProf());
    };
    fetchTodoProf();
  }, [dispatch]);

  return (
    <div>
      <ul className={styles.todoList}>
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
