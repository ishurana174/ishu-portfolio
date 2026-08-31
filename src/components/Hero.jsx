import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import "./../styles/hero.css";
import heroImage from "../assets/images/hero.png";
import AIHud from "./AIHud";

function Hero() {
  return (
    <section className="hero" id="home">
        <div className="glow1"></div>
        <div className="glow2"></div>

      {/* LEFT */}

      <motion.div
        className="hero-left"
        initial={{ x: -80, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >

        <span className="hero-tag">
          AI • MACHINE LEARNING • PYTHON
        </span>

        <h1>
          ISHU <span>RANA</span>
        </h1>

        <h2>
          <Typewriter
            words={[
              "AI & Machine Learning Engineer",
              "Python Developer",
              "Frontend Developer",
            ]}
            loop={0}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={45}
            delaySpeed={1500}
          />
        </h2>

        <p>
          Passionate AI & Machine Learning student focused on
          building intelligent applications, modern web interfaces,
          and solving real-world problems through technology.
        </p>

        <div className="hero-buttons">

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="btn-primary"
          >
            View Resume
          </a>

          <a
            href="/resume.pdf"
            download
            className="btn-secondary"
          >
            Download Resume
          </a>

        </div>

      </motion.div>

      {/* RIGHT */}

      <motion.div
        className="hero-right"
        initial={{ x: 80, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >

        <div className="hero-image-wrapper">

          <AIHud />

          <motion.div
            className="hero-card"
            animate={{ y: [0, -12, 0] }}
            transition={{
              repeat: Infinity,
              duration: 4,
              ease: "easeInOut",
            }}
          >
            <img
              src={heroImage}
              alt="Ishu Rana"
            />
          </motion.div>

          <div className="stats-panel">

            

          </div>

        </div>

      </motion.div>

    </section>
  );
}

export default Hero;
