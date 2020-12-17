import React, { useEffect, useState } from "react";
import { apiDataTop, apiDataUpcoming, apiDataDay } from "../../api";
import styles from "./TopAnime.module.css";
import { useHistory } from "react-router-dom";

const TopAnime = () => {
  let history = useHistory();
  const [animeData, setAnimeData] = useState([]);
  const [animeDataHype, setAnimeDataHype] = useState([]);
  const [animeDataDay, setAnimeDataDay] = useState([]);
  useEffect(() => {
    callApi();
  }, []);

  const callApi = async () => {
    const results = await apiDataTop();
    const hypeResults = await apiDataUpcoming();
    const dayResults = await apiDataDay();
    setAnimeData(results);
    setAnimeDataHype(hypeResults);
    setAnimeDataDay(dayResults);
  };



  return (
    <div>
      <h1>Recent Release</h1>
      <div className={styles.container}>
        <br />
        {animeDataDay === []
          ? null
          : animeDataDay.map((anime) => {
              console.log("Recent anime", anime);
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
                  <img  className = {styles.animeImage} src={anime.image_url} alt="anime" />
                  <div className={styles.size}>
                    <h5>
                      <b>{anime.title}</b>
                    </h5>
                  </div>
                </a>
              );
            })}
      </div>

      <h1>Top Rated </h1>
      <div className={styles.container}>
        <br />
        {animeData === []
          ? null
          : animeData.map((anime) => {
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
                        rank: anime.rank,
                        score: anime.score,
                        rated: anime.rated,
                        episodes: anime.episodes,
                        type: anime.type,
                        mal_id: anime.mal_id,
                        members: anime.members,
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
                  <div className={styles.size}>
                    <h5>
                      <b>{anime.title}</b>
                    </h5>
                  </div>
                </a>
              );
            })}
      </div>

      <h1>Upcoming Hype</h1>
      <div style={{ paddingBottom: "40px" }}>
        <div className={styles.container}>
          {animeDataHype === []
            ? null
            : animeDataHype.map((anime) => {
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
                          rank: anime.rank,
                          rated: anime.rated,
                          episodes: anime.episodes,
                          type: anime.type,
                          mal_id: anime.mal_id,
                          members: anime.members,
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
                    <div className={styles.size}>
                      <h5>
                        <b>{anime.title}</b>
                      </h5>
                    </div>
                  </a>
                );
              })}
        </div>
      </div>
    </div>
  );
};

export default TopAnime;
