import React, { useState, useEffect } from "react";
import styles from "./SeasonCards.module.css";
import { useLocation, useHistory } from "react-router-dom";
import { apiDataYearSeason } from "../../api";

const SeasonCards = () => {
  const [seasonAnimeArray, setSeasonAnimeArray] = useState([]);
  const location = useLocation();
  const history = useHistory();
  useEffect(() => {
    callApi();
    // eslint-disable-next-line
  }, []);

  const callApi = async () => {
    try {
      const year = location.state.year;
      let season = location.state.season;
      season = season.toLowerCase();
      const data = await apiDataYearSeason(year, season);
      setSeasonAnimeArray(data);
    } catch (error) {
      console.log(error);
    }
  };
  console.log("Year Season Anime", seasonAnimeArray);

  return (
    <div className={styles.container}>
      {seasonAnimeArray === []
        ? null
        : seasonAnimeArray.map((anime) => {
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

export default SeasonCards;
