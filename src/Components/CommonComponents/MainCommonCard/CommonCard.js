import React from "react";
import styles from "./CommonCard.module.css";
import { useHistory } from "react-router-dom";

const CommonCard = ({ animeData }) => {
  let history = useHistory();
  return (
    <div>
      <div className={styles.container}>
        <br />
        {animeData === []
          ? null
          : animeData.map((anime, key) => {
              // console.log(
              //   `Anime title is ${
              //     anime.title
              //   } and Regx vala is ${anime.title.replace(/\s+/g, "")} `
              // );
              return (
                <a
                  key={key}
                  href="true"
                  onClick={(event) => {
                    event.preventDefault();
                    let animeName = anime.title;
                    animeName = animeName.replace(/\s+/g, ""); // removes all global white spaces
                    history.push({
                      pathname: `/anime/info/${animeName}`,
                      state: {
                        img: anime.image_url,
                        title: anime.title,
                        synopsis: anime.synopsis,
                        score: anime.score,
                        rated: anime.rated,
                        airing: anime.airing_start,
                        episodes: anime.episodes,
                        type: anime.type,
                        mal_id: anime.mal_id,
                        members: anime.members,
                        genres: anime.genres,
                        start_date: anime.start_date,
                        end_date: anime.end_date,
                        url: anime.url,
                      },
                    });

                    window.location.href = `/anime/info/${animeName}`;
                  }}
                  className={styles.move}
                >
                  <img
                    className={styles.animeImage}
                    src={anime.image_url}
                    alt="anime"
                  />
                  <div className={styles.animeSize}>
                    <h3 id={styles.title}>
                      <b>{anime.title}</b>
                    </h3>
                  </div>
                </a>
              );
            })}
      </div>
    </div>
  );
};

export default CommonCard;
