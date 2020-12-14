import React from "react";
import Menu from "../Menu/Menu";
import TopAnime from "../TopAnime/TopAnime";
import styles from "./Main.module.css";

const Main = () => {
  return (
    <div className={styles.container}>
      <Menu/>
      <TopAnime />
    </div>
  );
};

export default Main;
