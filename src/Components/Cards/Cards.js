import React, { useEffect, useState } from "react";
import styles from "./Cards.module.css";
import { apiData } from "../../api";
import { useHistory } from "react-router-dom";

const Cards = () => {
  let history = useHistory();
  const [aanimeArray, setAnimeArray] = useState([]);

  useEffect(() => {
    callApi();
  }, []);

  const callApi = async () => {
    const path = window.location.pathname.split("/");
    const animeName = path[path.length - 1];
    console.log("anime name is", animeName);
    var results = await apiData(animeName);
    setAnimeArray(results);
  };

  console.log("Anime Array", aanimeArray);
  return (
    <div className={styles.container}>
      {aanimeArray === []
        ? null
        : aanimeArray.map((anime) => {
            return (
              <a
                href
                onClick={(event) => {
                  event.preventDefault();
                  let animeName = anime.title;
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

export default Cards;
