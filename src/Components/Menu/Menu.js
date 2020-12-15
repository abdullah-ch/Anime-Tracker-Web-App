import React from "react";
import styles from "./Menu.module.css";

const Menu = () => {
  return (
    <div>
      <ul className={styles.categories}>
        <li>
          <a
            href="null"
            onClick={(event) => {
              event.preventDefault();
              window.location = "/anime/categories";
            }}
          >
            Genres
          </a>
        </li>

        <li>
          <a
            href="null"
            onClick={(event) => {
              event.preventDefault();
              window.location = "/anime/season/later";
            }}
          >
            Upcoming Anime
          </a>
        </li>

        <li>
          <a
            href="null"
            onClick={(event) => {
              event.preventDefault();
              window.location = "/anime/archive";
            }}
          >
            Seasons
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
