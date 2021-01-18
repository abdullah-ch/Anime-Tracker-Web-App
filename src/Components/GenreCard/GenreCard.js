import React, { useEffect, useState } from "react";
import { apiDataGenres } from "../../api";
import { useLocation } from "react-router-dom";
import DisplayCommonCard from "../CommonComponents/DisplayCommonCard/DisplayCommonCard";

const GenreCard = () => {
  const location = useLocation();

  const [genreArray, setGenreArray] = useState([]);

  // calling the api only one
  useEffect(() => {
    callGenreApi();
    // eslint-disable-next-line
  }, []);

  const callGenreApi = async () => {
    // awaiting so the async call can be complete
    let genreData = await apiDataGenres(location.state.genreID);
    setGenreArray(genreData);
  };
  return (
    <div>
      <DisplayCommonCard animeData={genreArray} />
    </div>
  );
};

export default GenreCard;
