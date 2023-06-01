import React, { FC } from "react";
import { BsTrash } from "react-icons/bs";
import { FaEdit } from "react-icons/fa";

import { useAppDispatch } from "../../app/hooks";
import styles from "./TodoItem.module.css";
import { editTodo, fetchAsyncDelete, selectTodo } from "./todoSlice";
import { Todo } from "./type";

interface TodoProps {
  todo: Todo;
}

const TodoItem: FC<TodoProps> = (props) => {
  const { todo } = props;
  const dispatch = useAppDispatch();

  return (
    <li className={styles.listItem}>
      <span
        className={styles.cursor}
        onClick={() => dispatch(selectTodo(todo))}
      >
        {todo.title}
      </span>
      <div>
        <button
          onClick={() => dispatch(fetchAsyncDelete(todo.id))}
          className={styles.todoIcon}
        >
          <BsTrash />
        </button>
        <button
          onClick={() => dispatch(editTodo(todo))}
          className={styles.todoIcon}
        >
          <FaEdit />
        </button>
      </div>
    </li>
  );
};

export default TodoItem;
