import aboutImage from "../assets/images/ishu.png";
import "../styles/about.css";

function About() {
  return (
    <section className="about" id="about" data-aos="fade-right">

      <div className="section-title">
        <h2>
          About <span>Me</span>
        </h2>

        <p>Passionate AI & Machine Learning Developer</p>
      </div>

      <div className="about-wrapper">

        <div className="about-left">

          <div className="about-image">

            {/* Animated Border */}
            <span className="line top1"></span>
            <span className="line top2"></span>

            <span className="line right1"></span>
            <span className="line right2"></span>

            <span className="line bottom1"></span>
            <span className="line bottom2"></span>

            <span className="line left1"></span>
            <span className="line left2"></span>

            <img src={aboutImage} alt="Ishu Rana" />

          </div>

        </div>

        <div className="about-right">

          <h3>Hello, I'm Ishu Rana</h3>

          <p>
            I love learning new technologies and applying them to build practical
            solutions. From intelligent applications to responsive web interfaces,
            I enjoy creating projects that improve my technical skills and solve
            real-world challenges.
          </p>

          <div className="stats">

            <div className="box">
              <h2>2+</h2>
              <span>Projects</span>
            </div>

            <div className="box">
              <h2>5★</h2>
              <span>Python (HackerRank)</span>
            </div>

            <div className="box">
              <h2>200+</h2>
              <span>LeetCode Problems</span>
            </div>

            <div className="box">
              <h2>2+</h2>
              <span>Certificates</span>
            </div>

            <div className="box">
              <h2>2024 - 2028</h2>
              <span>B.Tech</span>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default About;