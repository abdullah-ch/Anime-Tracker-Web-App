import React, { useEffect, useState } from "react";
import { apiDataUpcomingAll } from "../../api";
import DisplayCommonCard from "../CommonComponents/DisplayCommonCard/DisplayCommonCard";

const UpcomingAnime = () => {
  const [upcomingAnimeArray, setUpcomingAnimeArray] = useState([]);

  useEffect(() => {
    callApi();
  }, []);

  const callApi = async () => {
    const data = await apiDataUpcomingAll();
    setUpcomingAnimeArray(data);
  };

  return (
    <div>
      {/*reusing component// awaiting so the async call can be complete
       */}
      <DisplayCommonCard animeData={upcomingAnimeArray} />
    </div>
  );
};

export default UpcomingAnime;
