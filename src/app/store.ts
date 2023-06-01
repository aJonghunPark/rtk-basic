import { Action, ThunkAction, configureStore } from "@reduxjs/toolkit";

import counterReducer from "../features/counter/counterSlice";
import loginReducer from "../features/login/loginSlice";
import taskReducer from "../features/task/taskSlice";
import todoReducer from "../features/todo/todoSlice";
import userReducer from "../features/user/userSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    task: taskReducer,
    user: userReducer,
    login: loginReducer,
    todo: todoReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
