import React from "react";
import { SiFiverr } from "react-icons/si";
import { BsLinkedin, BsGithub } from "react-icons/bs";
const HeaderSocials = () => {
  return (
    <div className="header__socials">
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
        <SiFiverr className="fiverr__social" />
      </a>
    </div>
  );
};

export default HeaderSocials;
