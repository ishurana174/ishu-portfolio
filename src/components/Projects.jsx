import "../styles/projects.css";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

import resumeProject from "../assets/images/resume-project.png";
import marksProject from "../assets/images/marks-project.png";

function Projects() {
  return (
    <section className="projects" id="projects" data-aos="fade-up">

      <div className="section-title">
        <h2>
          My <span>Projects</span>
        </h2>
        <p>
          Some of my recent AI & Machine Learning Projects.
        </p>
      </div>

      <div className="project-grid">

        {/* ================= Project 1 ================= */}
        

        <div className="project-card" data-aos="zoom-in">

          <div className="project-image">
            <img
              src={resumeProject}
              alt="AI Resume Screening"
            />
          </div>

          <div className="project-content">

            <h3>AI Resume Screening</h3>

            <p>
              AI-powered Resume Screening System using Machine
              Learning, Flask and NLP to automatically analyze,
              rank and shortlist resumes.
            </p>

            <div className="tech">
              <span>Python</span>
              <span>Flask</span>
              <span>Machine Learning</span>
              <span>NLP</span>
            </div>

            <div className="project-buttons">

              <a
                href="https://github.com/ishurana174/AI_Resume_Screening"
                target="_blank"
                rel="noreferrer"
                className="github-btn"
              >
                <FaGithub />
                GitHub
              </a>

              <a
                href="#"
                className="live-btn"
              >
                <FaExternalLinkAlt />
                Live Demo
              </a>

            </div>

          </div>

        </div>

        {/* ================= Project 2 ================= */}

        <div className="project-card" data-aos="zoom-in" data-aos-delay="200">

          <div className="project-image">
            <img
              src={marksProject}
              alt="Student Marks Prediction"
            />
          </div>

          <div className="project-content">

            <h3>Student Marks Prediction</h3>

            <p>
              Machine Learning project using Linear Regression,
              Pandas, NumPy and Scikit-Learn to accurately
              predict student performance.
            </p>

            <div className="tech">
              <span>Python</span>
              <span>Pandas</span>
              <span>NumPy</span>
              <span>Scikit-Learn</span>
            </div>

            <div className="project-buttons">

              <a
                href="https://github.com/ishurana174/Student-Performance"
                target="_blank"
                rel="noreferrer"
                className="github-btn"
              >
                <FaGithub />
                GitHub
              </a>

              <a
                href="#"
                className="live-btn"
              >
                <FaExternalLinkAlt />
                Live Demo
              </a>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Projects;