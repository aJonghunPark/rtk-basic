import { List } from "@mui/material";
import React from "react";

import { useAppSelector } from "../../app/hooks";
import { TaskItem } from "./TaskItem";
import { selectTask } from "./taskSlice";

export const TaskList = () => {
  const tasks = useAppSelector(selectTask);

  return (
    <List sx={{ width: "100%", bgcolor: "background.paper" }}>
      {tasks && tasks.map((task) => <TaskItem key={task.id} task={task} />)}
    </List>
  );
};
