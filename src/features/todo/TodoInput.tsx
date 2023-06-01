import { Button } from "@mui/material";
import React, { ChangeEvent } from "react";

import { useAppDispatch, useAppSelector } from "../../app/hooks";
import styles from "./TodoInput.module.css";
import {
  editTodo,
  fetchAsyncCreate,
  fetchAsyncUpdate,
  selectEditedTodo,
} from "./todoSlice";

const TodoInput = () => {
  const dispatch = useAppDispatch();
  const editedTodo = useAppSelector(selectEditedTodo);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    editedTodo.id === 0
      ? dispatch(editTodo({ id: 0, title: e.target.value }))
      : dispatch(editTodo({ id: editedTodo.id, title: e.target.value }));
  };

  const isDisabled = editedTodo.title.length === 0;

  const createClicked = () => {
    dispatch(fetchAsyncCreate(editedTodo));
    dispatch(editTodo({ id: 0, title: "" }));
  };

  const updateClicked = () => {
    dispatch(fetchAsyncUpdate(editedTodo));
    dispatch(editTodo({ id: 0, title: "" }));
  };

  return (
    <div>
      <input
        type="text"
        className={styles.todoInput}
        value={editedTodo.title}
        onChange={handleInputChange}
        placeholder="Please input task"
      />
      <div className={styles.switch}>
        {editedTodo.id === 0 ? (
          <Button
            variant="contained"
            disabled={isDisabled}
            onClick={createClicked}
            color="primary"
          >
            Create
          </Button>
        ) : (
          <Button
            variant="contained"
            disabled={isDisabled}
            onClick={updateClicked}
            color="primary"
          >
            Update
          </Button>
        )}
      </div>
    </div>
  );
};

export default TodoInput;
