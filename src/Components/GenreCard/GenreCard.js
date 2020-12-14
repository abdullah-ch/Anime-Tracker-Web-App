import React, { useEffect, useState } from "react";
import styles from "./GenreCard.module.css";
import { apiDataGenres } from "../../api";

const GenreCard = () => {
  const [genreArray, setGenreArray] = useState([]);
  useEffect(() => {
    callGenreApi();
  }, []);

  const callGenreApi = async () => {
    const path = window.location.pathname.split("/");
    let genreID = path[path.length - 1];
    console.log("anime genre ID is", genreID++);
    let genreData = await apiDataGenres(genreID);
    setGenreArray(genreData);
    console.log(genreArray);
  };
  return (
    <div>
      <h1> Genre Card</h1>
    </div>
  );
};

export default GenreCard;
