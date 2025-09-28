import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <h2>Contact Me</h2>
      <p className="fade-in">
        I’m open to work and collaborations. Feel free to reach out!
      </p>

      <div className="contact-info fade-in">
        <p>
          <strong>Email:</strong> tejasverma2000@gmail.com
        </p>
        <p>
          <strong>Phone:</strong> +91 8405902168
        </p>
      </div>

      <div className="social-links fade-in">
        <a href="https://www.linkedin.com/in/tejas-verma-965211265/" target="_blank" rel="noreferrer">
          LinkedIn
        </a>
        <a href="https://github.com/tejasverma12" target="_blank" rel="noreferrer">
          GitHub
        </a>
        <a href="https://twitter.com/" target="_blank" rel="noreferrer">
          Twitter
        </a>
      </div>
    </section>
  );
};

export default Contact;
