import axios from "axios";

const url = "https://api.jikan.moe/v3";

export const apiData = async (name) => {
  try {
    const {
      data: { results },
    } = await axios.get(`${url}/search/anime?q=${name}`);

    return results;
  } catch (error) {
    console.log(error);
  }
};

export const apiDataTop = async () => {
  try {
    const {
      data: { top },
    } = await axios.get(`${url}/top/anime`);

    return top;
  } catch (error) {
    console.log(error);
  }
};

export const apiDataUpcoming = async () => {
  try {
    const {
      data: { top },
    } = await axios.get(`${url}/top/anime/1/upcoming`);

    return top;
  } catch (error) {
    console.log(error);
  }
};

export const apiDataDay = async () => {
  try {
    var days = [
      "sunday",
      "monday",
      "tuesday",
      "wednesday",
      "thursday",
      "friday",
      "saturday",
    ];
    var date = new Date();
    var dayName = days[date.getDay()];

    const {
      data: { [dayName]: day },
    } = await axios.get(`${url}/schedule/${dayName}`);

    return day;
  } catch (error) {
    console.log(error);
  }
};

export const apiDataGenres = async (genreID) => {
  try {
    console.log("mein aa rha hun");
    const 
      apiGenre
     = await axios.get(`${url}/genre/anime/${genreID}`);
    console.log("Anime Genre Array is", apiGenre);
    return apiGenre;
  } catch (error) {
    console.log(error);
  }
};

export const genres = [
  "Action",
  "Adventure",
  "Cars",
  "Comedy",
  "Dementia",
  "Demons",
  "Drama",
  "Ecchi",
  "Fantasy",
  "Game",
  "Harem",
  "Hentai",
  "Historical",
  "Horror",
  "Josei",
  "Kids",
  "Magic",
  "Martial Arts",
  "Mecha",
  "Military",
  "Parody",
  "Police",
  "Psychological",
  "Romance",
  "Samurai",
  "School",
  "Sci-Fi",
  "Seinen",
  "Shoujo",
  "Shoujo Ai",
  "Slice of Life",
  "Space",
  "Sports",
  "Super Power",
  "Supernatural",
  "Thriller",
  "Vampire",
  "Yaoi",
  "Yuri",
];
