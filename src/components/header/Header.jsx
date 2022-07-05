import React from "react";
import "./Header.css";
import HeaderButtons from "./HeaderButtons";
import ME from "../../assets/me.png";
import HeaderSocials from "./HeaderSocials";
const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Roberto Barreto</h1>
        <h5 className="text-light">Fullstack Developer</h5>

        <HeaderButtons />

        <HeaderSocials />

        <div className="me">
          <img src={ME} alt="ME" />
        </div>

        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
