import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { apiDataYearSeason } from "../../api";
import DisplayCommonCard from "../CommonComponents/DisplayCommonCard/DisplayCommonCard";

const SeasonCards = () => {
  const [seasonAnimeArray, setSeasonAnimeArray] = useState([]);
  // react router dom's hook through which we can access the data that is sent to the routed component
  const location = useLocation();

  useEffect(() => {
    callApi();
    // eslint-disable-next-line
  }, []);

  const callApi = async () => {
    try {
      // accessing the data from the router's pipeline
      const year = location.state.year;
      let season = location.state.season;
      season = season.toLowerCase();
      const data = await apiDataYearSeason(year, season);
      setSeasonAnimeArray(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <DisplayCommonCard animeData={seasonAnimeArray} />
    </div>
  );
};

export default SeasonCards;
