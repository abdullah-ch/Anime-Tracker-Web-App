import React, { useEffect, useState } from "react";
import styles from "./UpcomingAnime";
import { apiDataUpcomingAll } from "../../api";

const UpcomingAnime = () => {
  const [upcomingAnimeArray, setUpcomingAnimeArray] = useState();
  useEffect(() => {
    callApi();
  }, []);
  const callApi = async () => {
    const data = await apiDataUpcomingAll();
    setUpcomingAnimeArray(data);
    console.log(upcomingAnimeArray);
  };
  return <div></div>;
};

export default UpcomingAnime;
