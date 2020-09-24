import React from "react";
import styles from "./AnimeInfo.module.css";
import { useLocation } from "react-router-dom";
import { Button } from "react-bootstrap";

const AnimeInfo = () => {
  const location = useLocation();
  console.log("The data props issss", location.state.title);

  const genres = () => {
    if (location.state.genres) {
      return location.state.genres.map((genre) => (
        <a href={genre.url}>
          <p>
            <li>{genre.name}</li>
          </p>
        </a>
      ));
    }
  };

  const synopsis = () => {
    if (location.state.synopsis) {
      return <p>{location.state.synopsis}</p>;
    }
  };

  return (
    <div className={styles.box}>
      <div className={styles.fakeBox}>
        <div className={styles.image}>
          <img src={location.state.img} alt="anime" />
          <p style={{ textAlign: "center" }}>{location.state.title}</p>
        </div>

        <div>
          {location.state.rank ? (
            <p>
              {" "}
              <span className={styles.text}>Rank: </span>
              {location.state.rank}
            </p>
          ) : null}

          {location.state.score ? (
            <p>
              <span className={styles.text}>MAL Rating:</span>{" "}
              {location.state.score}
            </p>
          ) : null}
          {location.state.episodes ? (
            <p>
              {" "}
              <span className={styles.text}> Total Episodes:</span>{" "}
              {location.state.episodes}
            </p>
          ) : null}
          {location.state.airing ? (
            <p>
              {" "}
              <span className={styles.text}> Airing Date:</span>{" "}
              {new Date(location.state.airing).toDateString()}
            </p>
          ) : null}
          <p>
            {" "}
            <span className={styles.text}>Type:</span> {location.state.type}
          </p>
          <p>
            <span className={styles.text}>Members on MAL:</span>{" "}
            {location.state.members}
          </p>
          <p>
            <span className={styles.text}>ID on MAL:</span>{" "}
            {location.state.mal_id}
          </p>
          {location.state.start_date ? (
            <p>
              <span className={styles.text}>Released: </span>
              {new Date(location.state.start_date).toDateString()}
            </p>
          ) : null}
          {location.state.end_date ? (
            <p>
              {" "}
              <span className={styles.text}>Finished:</span>{" "}
              {new Date(location.state.end_date).toDateString()}
            </p>
          ) : null}
          {location.state.genres ? (
            <p>
              <span className={styles.text}>Genres</span>{" "}
            </p>
          ) : null}
          {genres()}
        </div>
        <hr />

        <div className={styles.right}>
          {location.state.synopsis ? (
            <p>
              <span className={styles.text}>Synopsis</span>
            </p>
          ) : null}
          {synopsis()}
          <Button
            onClick={() => {
              window.location.href = `${location.state.url}`;
            }}
            className={styles.btn}
            type="submit"
          >
            Find Out More
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AnimeInfo;
