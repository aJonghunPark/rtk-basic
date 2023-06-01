import React from "react";

import { useAppSelector } from "../../app/hooks";
import styles from "./Header.module.css";
import { selectProfile } from "./loginSlice";

const Header = () => {
  const profile = useAppSelector(selectProfile);
  return (
    <div className={styles.header}>
      <h3>{profile.username}</h3>
      <h1>Today&apos;s todo</h1>
    </div>
  );
};

export default Header;
