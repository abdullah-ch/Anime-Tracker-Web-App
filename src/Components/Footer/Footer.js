import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import styles from "./Footer.module.css";

const CustomFooter = () => {
  return (
    <div className={styles.footer}>
      <p class="love">
        Made with <FontAwesomeIcon color="red" icon={faHeart} /> by{" "}
        <span
          className={styles.span}
          onClick={() =>
            (window.location.href = "https://github.com/abdullah-ch")
          }
        >
          Abdullah Ch
        </span>
      </p>
    </div>
  );
};

export default CustomFooter;
