import React from "react";
import "./Footer.css";
import { SiFiverr } from "react-icons/si";
import { BsLinkedin, BsGithub } from "react-icons/bs";

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">
        ROBERTO BARRETO
      </a>
      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Experience</a>
        </li>
        <li>
          <a href="#">Portfolio</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
      <div className="footer__socials">
        <a
          href="https://www.linkedin.com/in/roberto-barreto-b5855719b/"
          target="_blank"
        >
          <BsLinkedin />
        </a>
        <a href="https://github.com/RobertoFMBarreto" target="_blank">
          <BsGithub />
        </a>
        <a href="https://www.fiverr.com/bitcode_" target="_blank">
          <SiFiverr />
        </a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Roberto Barreto. All rights reserved</small>
      </div>
    </footer>
  );
};

export default Footer;
