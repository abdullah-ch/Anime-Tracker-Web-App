import React, { useEffect, useState } from "react";
import styles from "./GenreCard.module.css";
import { apiDataGenres } from "../../api";
import { useHistory } from "react-router-dom";
import { useLocation } from "react-router-dom";

const GenreCard = () => {
  let history = useHistory();
  const location = useLocation();

  const [genreArray, setGenreArray] = useState([]);

  useEffect(() => {
    callGenreApi();
    // eslint-disable-next-line
  }, []);

  const callGenreApi = async () => {
    let genreData = await apiDataGenres(location.state.genreID);
    setGenreArray(genreData);
    console.log(genreArray);
  };
  return (
    <div className={styles.container}>
      {console.log(genreArray)}
      {genreArray === []
        ? null
        : genreArray.map((anime, key) => {
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

export default GenreCard;
