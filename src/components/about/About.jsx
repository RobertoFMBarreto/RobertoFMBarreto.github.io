import React from "react";
import "./About.css";
import ME from "../../assets/me-about.jpg";
import { FaAward } from "react-icons/fa";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="me" />
          </div>
        </div>

        <div className="about__content">
          <p>
            I learned programming by teaching my self how to code creating games
            in unity with c# as 16 years old, since then i got excited with
            programming and looked for learning more and more, having then
            experience with html, php, MySQL and Iot programing for my final
            project in technical education.I have learned Flutter, Dart,
            Firestore and developed a fitness app with it.Recently i developed a
            project called gym app with a node js api, microservices, angular
            and postgres, that gives support to gyms.
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
