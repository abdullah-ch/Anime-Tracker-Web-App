import axios from "axios";

const url = "https://api.jikan.moe/v3";

export const apiData = async (name) => {
  try {
    console.log("api calling with name", name);
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
    console.log("Today's Date", date);
    console.log("Today's Date bruh", date.getDay());
    var dayName = days[date.getDay()];
    console.log("Today's Day is", dayName);
    console.log("Today's DayNumber is", date.getDay());
    const {
      data: { [dayName]: day },
    } = await axios.get(`${url}/schedule/${dayName}`);

    console.log("Today", day);

    return day;
  } catch (error) {
    console.log(error);
  }
};
