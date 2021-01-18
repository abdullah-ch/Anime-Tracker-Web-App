import React, { useEffect, useState } from "react";
import { apiDataTop, apiDataUpcoming, apiDataDay } from "../../api";
import CommonCard from "../CommonComponents/MainCommonCard/CommonCard";

const TopAnime = () => {
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

      {/*reusing components */}
      <CommonCard animeData={animeDataDay} />

      <h1>Top Rated </h1>
      <CommonCard animeData={animeData} />

      <h1>Upcoming Hype</h1>
      <CommonCard animeData={animeDataHype} />
    </div>
  );
};

export default TopAnime;
