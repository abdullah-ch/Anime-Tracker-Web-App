import React from "react";
import styles from "./Genre.module.css";
import { genres } from "../../api";

const Genre = () => {
  return (
    <div className={styles.gridContainer}>
      {genres.map((genre, i) => (
        <h3
          className={styles.gridItem}
          onClick={(event) => {
            event.preventDefault();
            window.location = `/anime/genre/${genre}/${i}`;
          }}
        >
          {genre}
        </h3>
      ))}
    </div>
  );
};

export default Genre;
