import React from "react";
import { FaSignInAlt } from "react-icons/fa";

import Header from "../features/login/Header";
import TodoDetails from "../features/todo/TodoDetails";
import TodoInput from "../features/todo/TodoInput";
import TodoList from "../features/todo/TodoList";
import styles from "./TodoPage.module.css";

const TodoPage = () => {
  const Logout = () => {
    localStorage.removeItem("localJWT");
    window.location.href = "/";
  };
  return (
    <div className={styles.containerTodos}>
      <div className={styles.appTodos}>
        <button onClick={Logout} className={styles.signBtn}>
          <FaSignInAlt />
        </button>
        <Header />
        <TodoInput />
        <TodoList />
      </div>
      <div className={styles.appDetails}>
        <TodoDetails />
      </div>
    </div>
  );
};

export default TodoPage;
