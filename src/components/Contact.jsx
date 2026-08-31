import "../styles/contact.css";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";

function Contact() {
  const form = useRef();

  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    setLoading(true);

    emailjs
      .sendForm(
        "service_riah69g",
        "template_b90883a",
        form.current,
        "K6sDrRidZhTm8DnF2"
      )
      .then(
        () => {
          alert("✅ Message Sent Successfully!");

          form.current.reset();

          setLoading(false);
        },
        (error) => {
          console.log(error);

          alert("❌ Failed to send message!");

          setLoading(false);
        }
      );
  };

  return (
    <section
      className="contact"
      id="contact"
      data-aos="fade-left"
    >
      <div className="section-title">
        <h2>
          Contact <span>Me</span>
        </h2>

        <p>
          Let's connect and build something amazing.
        </p>
      </div>

      <div className="contact-container">
        <div className="contact-info">
          <h3>Get In Touch</h3>

          <p>📧 ishuranakanhaiya@gmail.com</p>

          <p>📍 Uttar Pradesh, India</p>

          <div className="social-links">
            <a
              href="https://github.com/ishurana174"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/ishu-rana-681b7927a"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://instagram.com/ishu_rana_174_"
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagram />
            </a>
          </div>
        </div>

        <form
          ref={form}
          onSubmit={sendEmail}
          className="contact-form"
        >
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
          />

          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
          />

          <textarea
            name="message"
            rows="6"
            placeholder="Your Message"
            required
          ></textarea>

          <button type="submit">
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;