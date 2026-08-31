import "../styles/skills.css";
import {
  FaPython,
  FaReact,
  FaJava,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaGithub,
  FaBrain
} from "react-icons/fa";

function Skills() {
  const skills = [
    { icon: <FaPython />, name: "Python", level: "90%" },
    { icon: <FaReact />, name: "React", level: "60%" },
    { icon: <FaJava />, name: "Java", level: "85%" },
    { icon: <FaHtml5 />, name: "HTML", level: "90%" },
    { icon: <FaCss3Alt />, name: "CSS", level: "85%" },
    { icon: <FaJsSquare />, name: "JavaScript", level: "80%" },
    { icon: <FaGithub />, name: "Git & GitHub", level: "80%" },
    { icon: <FaBrain />, name: "ML & DL", level: "70%" }
  ];

  return (
    <section className="skills" id="skills" data-aos="zoom-in">

      <div className="section-title">
        <h2>My <span>Skills</span></h2>
        <p>Technologies I work with</p>
      </div>

      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div className="skill-card" key={index}>
            <div className="skill-icon">{skill.icon}</div>

            <h3>{skill.name}</h3>

            <div className="progress">
              <div
                className="progress-bar"
                style={{ width: skill.level }}
              ></div>
            </div>

            <span>{skill.level}</span>
          </div>
        ))}
      </div>

    </section>
  );
}

export default Skills;