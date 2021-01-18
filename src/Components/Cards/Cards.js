import React, { useEffect, useState } from "react";
import { apiData } from "../../api";
import DisplayCommonCard from "../CommonComponents/DisplayCommonCard/DisplayCommonCard";

const Cards = () => {
  const [aanimeArray, setAnimeArray] = useState([]);

  useEffect(() => {
    callApi();
  }, []);

  const callApi = async () => {
    const path = window.location.pathname.split("/");
    const animeName = path[path.length - 1];
    var results = await apiData(animeName);
    setAnimeArray(results);
  };

  return (
    <div>
      <DisplayCommonCard animeData={aanimeArray} />
    </div>
  );
};

export default Cards;
