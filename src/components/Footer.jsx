import "../styles/footer.css";
import { FaGithub, FaLinkedin, FaInstagram, FaHeart } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer" data-aos="fade-up">

      <h2>Ishu<span> Rana</span></h2>

      <p>
        Artificial Intelligence & Machine Learning Developer
      </p>

      <div className="footer-social">

        <a href="https://github.com/ishurana174" target="_blank" rel="noreferrer">
          <FaGithub />
        </a>

        <a href="https://linkedin.com" target="_blank" rel="noreferrer">
          <FaLinkedin />
        </a>

        <a href="https://instagram.com" target="_blank" rel="noreferrer">
          <FaInstagram />
        </a>

      </div>

      <p className="copyright">
        <span>Made </span>
        <FaHeart className="heart" />
        <span>by Ishu Rana © 2026</span>
    </p>

    </footer>
  );
}

export default Footer;