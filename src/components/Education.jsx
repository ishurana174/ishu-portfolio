import { motion } from "framer-motion";
import "../styles/education.css";

function Education() {
  return (
    <section className="education" id="education">

      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        My <span>Education</span>
      </motion.h2>

      <div className="education-container">

        {/* Main Card */}

        <motion.div
          className="education-main"
          initial={{ x: -80, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >

          <div className="edu-header">

            <div className="edu-icon">
              🎓
            </div>

            <div>

              <h3>B.Tech CSE (AI & ML)</h3>

              <p>Dr. A.P.J. Abdul Kalam Technical University (AKTU), Lucknow</p>

            </div>

          </div>

          <div className="edu-info">

            <div>
              <span>Duration</span>
              <h4>2024 - 2028</h4>
            </div>

            <div>
              <span>Status</span>
              <h4>Currently Pursuing</h4>
            </div>

            <div>
              <span>CGPA</span>
              <h4>8.1</h4>
            </div>

          </div>

          <div className="progress-box">

            <div className="progress-top">

              <span>Course Progress</span>

              <span>50%</span>

            </div>

            <div className="progress">

              <div className="progress-fill"></div>

            </div>

          </div>

        </motion.div>

        {/* Bottom Cards */}

        <div className="education-bottom">

          <motion.div
            className="school-card"
            initial={{ y: 60, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: .7 }}
          >

            <h3>Class XII</h3>

            <h4>Jawahar Navodaya Vidyalaya</h4>

            <p>CBSE Board</p>

            <span>74%</span>

            <small>2023</small>

          </motion.div>

          <motion.div
            className="school-card"
            initial={{ y: 60, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: .9 }}
          >

            <h3>Class X</h3>

            <h4>Jawahar Navodaya Vidyalaya</h4>

            <p>CBSE Board</p>

            <span>90%</span>

            <small>2021</small>

          </motion.div>

        </div>

      </div>

    </section>
  );
}

export default Education;