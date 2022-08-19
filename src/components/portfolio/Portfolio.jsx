import React from "react";
import "./Portfolio.css";
import IMG1 from "../../assets/GymApp.png";
import IMG2 from "../../assets/FitnessApp.png";
import IMG3 from "../../assets/iwc.png";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__both">
        <div className="container recently-worked-on">
          <h3>Recently Worked On</h3>
          <div className="container portfolio__container">
            <article className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={IMG2} alt="" />
              </div>
              <h3>Fitness App</h3>
            </article>
            <article className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={IMG1} alt="" />
              </div>
              <h3>Gym App</h3>
            </article>
          </div>
        </div>
        <div className="container recently-worked-on">
          <h3>Working On</h3>
          <div className="container portfolio__container">
            <article className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={IMG3} alt="" />
              </div>
              <h3>I Want A Coach</h3>
              <div className="portfolio__item-buttons">
                <a href="" className="btn" target="_blank">
                  Github
                </a>
                <a href="" className="btn btn-primary" target="_blank">
                  Live Demo
                </a>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
