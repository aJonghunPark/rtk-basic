import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { RootState } from "../../app/store";
import { User } from "./type";
import { fetchAll } from "./userAPI";

export interface UserState {
  users: User[];
  status: "idle" | "loading" | "complete" | "failed";
}
const initialState: UserState = {
  users: [],
  status: "idle",
};

export const fetchAllAsync = createAsyncThunk(
  "user/fetchAllAsync",
  async () => {
    const response = await fetchAll();
    return response.data;
  }
);

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchAllAsync.fulfilled, (state, action) => {
        state.status = "complete";
        state.users = action.payload;
      })
      .addCase(fetchAllAsync.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export const selectUser = (state: RootState) => state.user;

export default userSlice.reducer;
