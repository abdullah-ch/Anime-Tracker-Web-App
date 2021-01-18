import React from "react";
import styles from "./Genre.module.css";
import { genres } from "../../api";
import { useHistory } from "react-router-dom";
import { Card } from "react-bootstrap";

const Genre = () => {
  let history = useHistory();
  return (
    <div className={styles.gridContainer}>
      {genres.map((genre, i) => (
        <div key={i}>
          <Card className={styles.genreCard}>
            <Card.Body>
              <Card.Title
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
              </Card.Title>
            </Card.Body>
          </Card>
        </div>
      ))}
    </div>
  );
};

export default Genre;
