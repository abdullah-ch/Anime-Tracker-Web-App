import React from "react";
import { FaFacebook } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import styles from "./Footer.module.css";

const CustomFooter = () => {
  return (
    <div className={styles.footer}>
      <a
        href="https://www.facebook.com/mrabdullahch/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span size="30px" className="icon">
          <FaFacebook />
        </span>
      </a>

      <a
        href="https://www.instagram.com/mrabdullahch/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className="icon">
          <GrInstagram />
        </span>
      </a>

      <a
        href="https://www.linkedin.com/in/abdullah-ch/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className="icon">
          <AiFillLinkedin />
        </span>
      </a>

      <a
        href="https://github.com/abdullah-ch"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className="icon">
          <AiFillGithub />
        </span>
      </a>

      <p className="love">
        Made with <FontAwesomeIcon color="red" icon={faHeart} /> by
        <span
          className={styles.spann}
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
