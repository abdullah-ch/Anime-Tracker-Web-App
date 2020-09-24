import React from "react";
import Main from "./Components/Main/Main";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./App.module.css";
import { BrowserRouter as Router, Route} from "react-router-dom";
import SearchBar from "./Components/SearchBar/SearchBar";
import AnimeInfo from "./Components/AnimeInfo/AnimeInfo";
import Cards from "./Components/Cards/Cards"

const App = () => {
  
  return (
    <Router>
    <div className={styles.container}>
        <SearchBar />
        <Route path="/" exact component={Main} />
        <Route path="/anime/info" component={AnimeInfo} />
        <Route path="/anime/cards" component={Cards} />
      </div>
    </Router>
  );
};

export default App;
