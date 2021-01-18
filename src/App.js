import React from "react";
import Main from "./Components/Main/Main";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./App.module.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import SearchBar from "./Components/SearchBar/SearchBar";
import AnimeInfo from "./Components/CommonComponents/AnimeInfo/AnimeInfo";
import Cards from "./Components/Cards/Cards";
import Genre from "./Components/Genre/Genre";
import CustomFooter from "./Components/Footer/Footer";
import GenreCard from "./Components/GenreCard/GenreCard";
import UpcomingAnime from "./Components/UpcomingAnime/UpcomingAnime";
import SeasonMenu from "./Components/SeasonMenu/SeasonMenu";
import SeasonCards from "./Components/SeasonCards/SeasonCards";

const App = () => {
  return (
    <Router>
      <div className={styles.container}>
        <SearchBar />
        {/* creating routes */}
        <Route path="/" exact component={Main} />
        <Route path="/anime/info" component={AnimeInfo} />
        <Route path="/anime/cards" component={Cards} />
        <Route path="/anime/categories" component={Genre} />
        <Route path="/anime/genre" component={GenreCard} />
        <Route path="/anime/season/later" component={UpcomingAnime} />
        <Route path="/anime/archive" component={SeasonMenu} />
        <Route path="/anime/season" component={SeasonCards} />
        <CustomFooter />
      </div>
    </Router>
  );
};

export default App;
