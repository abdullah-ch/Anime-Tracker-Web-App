import React, { useEffect, useState } from "react";
import styles from "./SeasonMenu.module.css";
import { apiDataSeasonArchive } from "../../api";
import { Card } from "react-bootstrap";
import { useHistory } from "react-router-dom";

const SeasonMenu = () => {
  let history = useHistory();

  const [seasonArchiveArray, setSeasonArchiveArray] = useState([]);

  useEffect(() => {
    callApi();
  }, []);

  const callApi = async () => {
    const data = await apiDataSeasonArchive();
    setSeasonArchiveArray(data);
  };

  return (
    <div>
      <h1>Season Archive</h1>
      <div className={styles.container}>
        {seasonArchiveArray === []
          ? null
          : seasonArchiveArray.map(({ seasons, year }, key) => {
              return (
                <div className={styles.card} key={key}>
                  <Card
                    className={styles.cardCont}
                    // style={{
                    //   width: "22rem",
                    //   backgroundColor: "black",
                    //     boxShadow: "5px 10px #888888",
                    //   //backgroundColor: "RGB(242, 242, 242)"
                    // }}
                  >
                    <Card.Body>
                      <Card.Title className={styles.title}>{year}</Card.Title>
                      {seasons.map((season, key) => (
                        <Card.Link
                          className={styles.season}
                          href="#"
                          key={key}
                          onClick={(event) => {
                            event.preventDefault();
                            history.push({
                              pathname: `/anime/season/${year}/${season}`,
                              state: {
                                year: year,
                                season: season,
                              },
                            });
                            window.location.href = `/anime/season/${year}/${season}`;
                          }}
                        >
                          {season}
                        </Card.Link>
                      ))}
                    </Card.Body>
                  </Card>
                </div>
              );
            })}
      </div>
    </div>
  );
};

export default SeasonMenu;
