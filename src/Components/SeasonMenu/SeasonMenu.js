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

  console.log("archive array isss", seasonArchiveArray);

  return (
    <div>
      <h1>Season Archive</h1>
      <div className={styles.container}>
        {seasonArchiveArray === []
          ? null
          : seasonArchiveArray.map(({ seasons, year }) => {
              return (
                <div className={styles.card}>
                  <Card
                    style={{
                      width: "18rem",
                      backgroundColor: "RGB(69, 75, 82)",
                      paddingBlockEnd: "10px",
                    }}
                  >
                    <Card.Body>
                      <Card.Title>{year}</Card.Title>
                      {seasons.map((season) => (
                        <Card.Link
                          href="#"
                          className={styles.season}
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
