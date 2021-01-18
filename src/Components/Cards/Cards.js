import React, { useEffect, useState } from "react";
import { apiData } from "../../api";
import DisplayCommonCard from "../CommonComponents/DisplayCommonCard/DisplayCommonCard";

const Cards = () => {
  const [aanimeArray, setAnimeArray] = useState([]);

  // calling the API only one
  useEffect(() => {
    callApi();
  }, []);

  const callApi = async () => {
    // storing the animeName from the page's url
    const path = window.location.pathname.split("/");
    const animeName = path[path.length - 1];
    // awaiting so the async call can be complete
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
