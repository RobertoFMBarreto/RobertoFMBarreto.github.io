import React, { useRef } from "react";
import "./Contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { SiFiverr } from "react-icons/si";
import emailjs from "emailjs-com";
const Contact = () => {
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <article className="contact__option">
          <MdOutlineEmail className="contact__option-icon" />
          <h4>Email</h4>
          <h5 className="text-light">robertofmbarreto@gmail.com</h5>
          <a href="mailto:robertofmbarreto@gmail.com">Send a Message</a>
        </article>
        <article className="contact__option">
          <SiFiverr className="contact__option-icon" />
          <h4>Fiverr</h4>
          <h5 className="text-light">Bitcode_</h5>
          <a href="https://www.fiverr.com/bitcode_" target="_blank">
            Visit
          </a>
        </article>
      </div>
    </section>
  );
};

export default Contact;
