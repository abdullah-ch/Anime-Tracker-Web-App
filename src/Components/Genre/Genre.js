import React from "react";
import styles from "./Genre.module.css";
import { genres } from "../../api";
import { useHistory } from "react-router-dom";

const Genre = () => {
  let history = useHistory();
  return (
    <div className={styles.gridContainer}>
      {genres.map((genre, i) => (
        <h3
          className={styles.gridItem}
          onClick={(event) => {
            event.preventDefault();
            const genreID = ++i;
            history.push({
              pathname: `/anime/genre/${genre}`,
              state: {
                genreID: genreID,
              },
            });
            window.location = `/anime/genre/${genre}`;
          }}
        >
          {genre}
        </h3>
      ))}
    </div>
  );
};

export default Genre;
