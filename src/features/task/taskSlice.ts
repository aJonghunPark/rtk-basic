import { PayloadAction, createSlice, nanoid } from "@reduxjs/toolkit";

import { RootState } from "../../app/store";
import { Task } from "./type";

interface TaskState {
  tasks: Task[];
}

const initialState: TaskState = {
  tasks: [
    { id: nanoid(), title: "Test3", completed: false },
    { id: nanoid(), title: "Test2", completed: true },
    { id: nanoid(), title: "Test1", completed: true },
  ],
};

export const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<string>) => {
      const newTask = {
        id: nanoid(),
        title: action.payload,
        completed: false,
      };
      state.tasks = [newTask, ...state.tasks];
    },
    completeTask: (state, action: PayloadAction<Task>) => {
      const task = state.tasks.find((t) => t.id === action.payload.id);
      if (task) {
        task.completed = !task.completed;
      }
    },
    deleteTask: (state, action: PayloadAction<Task>) => {
      state.tasks = state.tasks.filter((t) => t.id !== action.payload.id);
    },
  },
});

export const { addTask, completeTask, deleteTask } = taskSlice.actions;

export const selectTask = (state: RootState) => state.task.tasks;

export default taskSlice.reducer;
