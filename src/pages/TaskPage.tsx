import { Box, Container } from "@mui/material";
import React from "react";

import { TaskInput } from "../features/task/TaskInput";
import { TaskList } from "../features/task/TaskList";

const TaskPage = () => {
  return (
    <Container component="main" maxWidth="sm">
      <Box
        sx={{
          p: 3,
          border: "1px grey",
          borderRadius: 2,
          boxShadow: 1,
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <TaskInput />
        <TaskList />
      </Box>
    </Container>
  );
};

export default TaskPage;
