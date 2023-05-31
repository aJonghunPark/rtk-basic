import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

import { RootState } from "../../app/store";

const apiUrl = process.env.REACT_APP_API_URL;
const token = localStorage.localJWT;

export interface LoginState {
  authen: {
    username: string;
    password: string;
  };
  isLoginView: boolean;
  profile: {
    id: number;
    username: string;
  };
}

const initialState: LoginState = {
  authen: {
    username: "",
    password: "",
  },
  isLoginView: true,
  profile: {
    id: 0,
    username: "",
  },
};

export const fetchAsyncLogin = createAsyncThunk(
  "login/post",
  async (auth: LoginState["authen"]) => {
    const res = await axios.post(`${apiUrl}authen/jwt/create`, auth, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return res.data;
  }
);

export const fetchAsyncRegister = createAsyncThunk(
  "login/register",
  async (auth: LoginState["authen"]) => {
    const res = await axios.post(`${apiUrl}api/register/`, auth, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return res.data;
  }
);

export const fetchAsyncProf = createAsyncThunk("login/get", async () => {
  const res = await axios.get(`${apiUrl}api/myself/`, {
    headers: {
      Authorization: `JWT ${token}`,
    },
  });
  return res.data;
});

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    editUsername(state, action: PayloadAction<string>) {
      state.authen.username = action.payload;
    },
    editPassword(state, action: PayloadAction<string>) {
      state.authen.password = action.payload;
    },
    toggleMode(state) {
      state.isLoginView = !state.isLoginView;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAsyncLogin.fulfilled, (state, action) => {
      localStorage.setItem("localJWT", action.payload.access);
      action.payload.access && (window.location.href = "/tasks");
    });
    builder.addCase(fetchAsyncProf.fulfilled, (state, action) => {
      state.profile = action.payload;
    });
  },
});

export const { editUsername, editPassword, toggleMode } = loginSlice.actions;
export const selectAuthen = (state: RootState) => state.login.authen;
export const selectIsLoginView = (state: RootState) => state.login.isLoginView;
export const selectProfile = (state: RootState) => state.login.profile;

export default loginSlice.reducer;
