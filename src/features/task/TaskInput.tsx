import { Button, Stack, TextField } from "@mui/material";
import React, { useState } from "react";

import { useAppDispatch } from "../../app/hooks";
import { addTask } from "./taskSlice";

export const TaskInput = () => {
  const dispatch = useAppDispatch();
  const [editTitle, setEditTitle] = useState("");
  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditTitle(e.target.value);
  };
  const handleSubmit = () => {
    dispatch(addTask(editTitle));
    setEditTitle("");
  };
  return (
    <Stack direction="row" spacing={2}>
      <TextField
        required
        fullWidth
        id="outlined-controlled"
        label="Task"
        value={editTitle}
        onChange={handleTitleChange}
      />
      <Button variant="contained" onClick={handleSubmit}>
        ADD
      </Button>
    </Stack>
  );
};
