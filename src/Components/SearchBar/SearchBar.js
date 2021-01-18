import React, { useState } from "react";
import { Navbar, Form, FormControl, Button } from "react-bootstrap";
import styles from "./SearchBar.module.css";

const SearchBar = () => {
  const [animeName, setAnimeName] = useState("");

  const handleChange = (event) => {
    setAnimeName(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // directing to a new page, that is routed to cards' component
    window.location = `/anime/cards/${animeName}`;
  };

  const onClick = (event) => {
    event.preventDefault();
    window.location = "/";
  };

  return (
    <div className={styles.container}>
      <Navbar className={styles.nav}>
        <span className={styles.span} onClick={onClick}>
          Anime Tracker App
        </span>
        <div className={styles.searchBar}>
          <Form inline onSubmit={handleSubmit}>
            <FormControl
              onChange={handleChange}
              type="text"
              placeholder="Anime"
              className=" mr-sm-2"
            />
            <Button className={styles.button} type="submit">
              Enter
            </Button>
          </Form>
        </div>
      </Navbar>
    </div>
  );
};

export default SearchBar;
