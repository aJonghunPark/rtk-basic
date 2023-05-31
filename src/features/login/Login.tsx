import { Button } from "@mui/material";
import React from "react";

import { useAppDispatch, useAppSelector } from "../../app/hooks";
import styles from "./Login.module.css";
import {
  editPassword,
  editUsername,
  fetchAsyncLogin,
  fetchAsyncRegister,
  selectAuthen,
  selectIsLoginView,
  toggleMode,
} from "./loginSlice";

export const Login = () => {
  const dispatch = useAppDispatch();
  const authen = useAppSelector(selectAuthen);
  const isLoginView = useAppSelector(selectIsLoginView);
  const btnDisabler = authen.username === "" || authen.password === "";

  // E: Expected 0 arguments, but got 1.
  // https://stackoverflow.com/questions/72079461/expected-0-arguments-but-got-1-while-passing-arguments-to-the-async-func-in-red
  const login = async () => {
    if (isLoginView) {
      await dispatch(fetchAsyncLogin(authen));
    } else {
      const result = await dispatch(fetchAsyncRegister(authen));

      if (fetchAsyncRegister.fulfilled.match(result)) {
        await dispatch(fetchAsyncLogin(authen));
      }
    }
  };

  return (
    <div className={styles.containerLogin}>
      <div className={styles.appLogin}>
        <h1>{isLoginView ? "Login" : "Register"}</h1>
        <span>Username</span>
        <input
          type="text"
          className={styles.inputLog}
          name="username"
          placeholder=""
          onChange={(e) => dispatch(editUsername(e.target.value))}
          required
        />
        <span>Password</span>
        <input
          type="password"
          className={styles.inputLog}
          name="password"
          placeholder=""
          onChange={(e) => dispatch(editPassword(e.target.value))}
          required
        />
        <div className={styles.switch}>
          <Button
            variant="contained"
            disabled={btnDisabler}
            color="primary"
            onClick={login}
          >
            {isLoginView ? "Login" : "Create"}
          </Button>
        </div>
        <span
          className={styles.switchText}
          onClick={() => dispatch(toggleMode())}
        >
          {isLoginView ? "Create Account ?" : "Back to Login"}
        </span>
      </div>
    </div>
  );
};

export default Login;
