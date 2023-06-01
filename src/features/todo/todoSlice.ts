import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

import { RootState } from "../../app/store";
import { Todo } from "./type";

const apiUrl = `${process.env.REACT_APP_API_URL}api/tasks/`;
const token = localStorage.localJWT;

export interface TodoState {
  todos: Todo[];
  editedTodo: Pick<Todo, "id" | "title">;
  selectedTodo: Todo;
}

const initialState: TodoState = {
  todos: [
    {
      id: 0,
      title: "",
      created_at: "",
      updated_at: "",
    },
  ],
  editedTodo: {
    id: 0,
    title: "",
  },
  selectedTodo: {
    id: 0,
    title: "",
    created_at: "",
    updated_at: "",
  },
};

export const fetchAsyncGet = createAsyncThunk("todo/get", async () => {
  const res = await axios.get(apiUrl, {
    headers: {
      Authorization: `JWT ${token}`,
    },
  });
  return res.data;
});

export const fetchAsyncCreate = createAsyncThunk(
  "todo/post",
  async (todo: Pick<Todo, "id" | "title">) => {
    const res = await axios.post(apiUrl, todo, {
      headers: {
        Authorization: `JWT ${token}`,
      },
    });
    return res.data;
  }
);

export const fetchAsyncUpdate = createAsyncThunk(
  "todo/put",
  async (todo: Pick<Todo, "id" | "title">) => {
    const res = await axios.put(`${apiUrl}${todo.id}/`, todo, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `JWT ${token}`,
      },
    });
    return res.data;
  }
);

export const fetchAsyncDelete = createAsyncThunk(
  "todo/delete",
  async (id: number) => {
    await axios.delete(`${apiUrl}${id}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `JWT ${token}`,
      },
    });
    return id;
  }
);

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    editTodo(
      state: TodoState,
      action: PayloadAction<Pick<Todo, "id" | "title">>
    ) {
      state.editedTodo = action.payload;
    },
    selectTodo(state: TodoState, action: PayloadAction<Todo>) {
      state.selectedTodo = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAsyncGet.fulfilled, (state, action) => {
      state.todos = action.payload;
    });
    builder.addCase(fetchAsyncCreate.fulfilled, (state, action) => {
      state.todos = [action.payload, ...state.todos];
    });
    builder.addCase(fetchAsyncUpdate.fulfilled, (state, action) => {
      state.todos = state.todos.map((todo) =>
        todo.id === action.payload.id ? action.payload : todo
      );
      state.selectedTodo = action.payload;
    });
    builder.addCase(fetchAsyncDelete.fulfilled, (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
      state.selectedTodo = initialState.selectedTodo;
    });
  },
});

export const { editTodo, selectTodo } = todoSlice.actions;
export const selectSelectedTodo = (state: RootState) => state.todo.selectedTodo;
export const selectEditedTodo = (state: RootState) => state.todo.editedTodo;
export const selectTodos = (state: RootState) => state.todo.todos;

export default todoSlice.reducer;
