import React from "react";
import "./Services.css";
import { BiCheck } from "react-icons/bi";

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>App Development</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Mobile and Desktop app development</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Custom app development</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Development based on existing webapp</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Ui/Ux convertion to app</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Frontend and Backend development</p>
            </li>
          </ul>
        </article>
        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Custom website development</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Ui/Ux convertion to Web</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>eCommerce website development</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Enterprise web app developmet</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Third Party Integrations and Customizations</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Frontend and Backend development</p>
            </li>
          </ul>
        </article>
        <article className="service">
          <div className="service__head">
            <h3>Backend Development</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Custom Backend development</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Integration with existing Frontend</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Microservices Implementation</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Backend development based on existing project definition</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Project definition and structuring</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Services;
