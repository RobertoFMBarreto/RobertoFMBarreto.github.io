import React, { useRef } from "react";
import "./Contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { SiFiverr } from "react-icons/si";
import emailjs from "emailjs-com";
const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_jadoyre",
        "template_gbnymj9",
        form.current,
        "tZS_Cq6JPsjeoRbgq"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
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
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
