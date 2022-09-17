import React, { useState } from "react";
import "./Nav.css";
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { RiBook2Line, RiServiceLine } from "react-icons/ri";
import { BiMessageSquareDetail } from "react-icons/bi";

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");
  return (
    <nav>
      <a
        href="#"
        className={activeNav === "#" ? "active" : null}
        onClick={() => {
          setActiveNav("#");
        }}
      >
        <AiOutlineHome />
      </a>
      <a
        href="#about"
        className={activeNav === "#about" ? "active" : null}
        onClick={() => {
          setActiveNav("#about");
        }}
      >
        <AiOutlineUser />
      </a>
      <a
        href="#experience"
        className={activeNav === "#experience" ? "active" : null}
        onClick={() => {
          setActiveNav("#experience");
        }}
      >
        <RiBook2Line />
      </a>

      <a
        href="#contact"
        className={activeNav === "#contact" ? "active" : null}
        onClick={() => {
          setActiveNav("#contact");
        }}
      >
        <BiMessageSquareDetail />
      </a>
    </nav>
  );
};

export default Nav;
