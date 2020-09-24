import React from "react";
import TopAnime from "../TopAnime/TopAnime";
import styles from "./Main.module.css";

const Main = () => {
  return (
    <div className={styles.container}>
      <TopAnime />
    </div>
  );
};

export default Main;
