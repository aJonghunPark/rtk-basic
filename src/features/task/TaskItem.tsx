import { Delete } from "@mui/icons-material";
import { Checkbox, IconButton, ListItem, ListItemText } from "@mui/material";
import React from "react";

import { useAppDispatch } from "../../app/hooks";
import { completeTask, deleteTask } from "./taskSlice";
import { Task } from "./type";

interface TaskItemProps {
  task: Task;
}

export const TaskItem: React.FC<TaskItemProps> = (props) => {
  const dispatch = useAppDispatch();
  const { task } = props;
  return (
    <ListItem key={task.id}>
      <Checkbox
        checked={task.completed}
        onChange={() => dispatch(completeTask(task))}
      />
      <ListItemText primary={task.title} />
      <IconButton
        aria-label="delete"
        onClick={() => dispatch(deleteTask(task))}
      >
        <Delete />
      </IconButton>
    </ListItem>
  );
};
