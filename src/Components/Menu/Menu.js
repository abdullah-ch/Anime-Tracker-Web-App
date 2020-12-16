import React from "react";
import styles from "./Menu.module.css";
import { Container, Navbar, ListGroup } from "react-bootstrap";

const Menu = () => {
  return (
    <div>
      <Container>
        <Navbar className={styles.menu}>
          <Navbar.Brand
            className={styles.menuItem}
            href="#"
            onClick={(event) => {
              event.preventDefault();
              window.location = "/anime/categories";
            }}
          >
            Genres
          </Navbar.Brand>
          <Navbar.Brand
            className={styles.menuItem}
            href="#"
            onClick={(event) => {
              event.preventDefault();
              window.location = "/anime/season/later";
            }}
          >
            {" "}
            Upcoming Anime
          </Navbar.Brand>
          <Navbar.Brand
            className={styles.menuItem}
            href="#"
            onClick={(event) => {
              event.preventDefault();
              window.location = "/anime/archive";
            }}
          >
            Seasons
          </Navbar.Brand>
        </Navbar>
      </Container>
      {/* <ListGroup horizontal className={styles.categories}>
        <ListGroup.Item className={styles.categoryItem}>
          <a
            href="null"
            onClick={(event) => {
              event.preventDefault();
              window.location = "/anime/categories";
            }}
          >
            Genres
          </a>
        </ListGroup.Item>

        <ListGroup.Item className={styles.categoryItem}>
          <a
            href="null"
            onClick={(event) => {
              event.preventDefault();
              window.location = "/anime/season/later";
            }}
          >
            Upcoming Anime
          </a>
        </ListGroup.Item>

        <ListGroup.Item  className={styles.categoryItem}>
          <a
           
            href="null"
            onClick={(event) => {
              event.preventDefault();
              window.location = "/anime/archive";
            }}
          >
            Seasons
          </a>
        </ListGroup.Item>
      </ListGroup> */}
    </div>
  );
};

export default Menu;
