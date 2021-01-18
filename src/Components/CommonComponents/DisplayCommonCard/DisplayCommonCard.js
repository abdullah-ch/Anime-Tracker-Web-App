import React from "react";
import styles from "./DisplayCommonCard.module.css";
import { useHistory } from "react-router-dom";

const DisplayCommonCard = ({ animeData }) => {
  let history = useHistory();
  return (
    <div className={styles.container}>
      {animeData === []
        ? null
        : animeData.map((anime, key) => {
            return (
              <a
                href="true"
                key={key}
                onClick={(event) => {
                  event.preventDefault();
                  let animeName = anime.title;
                  console.log(`Without using Replace Regex ${animeName}`);
                  animeName = animeName.replace(/\s+/g, "");
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
                <img src={anime.image_url} alt="anime" />
                <div className={styles.size}>
                  <h5 className={styles.heading}>
                    <b>{anime.title}</b>
                  </h5>
                </div>
              </a>
            );
          })}
    </div>
  );
};

export default DisplayCommonCard;
