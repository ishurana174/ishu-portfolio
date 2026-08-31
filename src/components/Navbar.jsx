import "./../styles/navbar.css";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

function Navbar() {
  return (
    <nav className="navbar">

      <div className="logo">
        <span>Ishu</span>Rana
      </div>

      <ul className="nav-links">

        <li>
          <a href="#home">Home</a>
        </li>

        <li>
          <a href="#about">About</a>
        </li>

        <li>
          <a href="#skills">Skills</a>
        </li>

        <li>
          <a href="#projects">Projects</a>
        </li>

        <li>
          <a href="#contact">Contact</a>
        </li>

      </ul>

      <div className="social">

        <a
          href="https://github.com/ishurana174"
          target="_blank"
        >
          <FaGithub />
        </a>

        <a
          href="https://www.linkedin.com/in/ishu-rana-681b7927a"
          target="_blank"
        >
          <FaLinkedin />
        </a>

        <a
          href="https://instagram.com/ishu_rana_174_"
          target="_blank"
        >
          <FaInstagram />
        </a>

      </div>

    </nav>
  );
}

export default Navbar;