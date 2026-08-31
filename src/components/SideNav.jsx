import { useEffect, useState } from "react";
import "./../styles/sidenav.css";

function SideNav() {
  const [active, setActive] = useState("home");
  const [progress, setProgress] = useState(0);

  const sections = [
    { id: "home", number: "01" },
    { id: "about", number: "02" },
    { id: "skills", number: "03" },
    { id: "education", number: "04" },
    { id: "projects", number: "05" },
    { id: "contact", number: "06" },
  ];

  useEffect(() => {
    const handleScroll = () => {

      const scrollPos = window.scrollY + 200;

      sections.forEach((section) => {

        const element = document.getElementById(section.id);

        if (
          element &&
          scrollPos >= element.offsetTop &&
          scrollPos < element.offsetTop + element.offsetHeight
        ) {
          setActive(section.id);
        }

      });

      // Progress Line
      const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      const current =
        (window.scrollY / totalHeight) * 100;

      setProgress(current);

    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () =>
      window.removeEventListener("scroll", handleScroll);

  }, []);

  return (
    <div className="side-nav">

      {/* Background Line */}
      <div className="progress-track"></div>

      {/* Filled Line */}
      <div
        className="progress-fill"
        style={{ height: `calc(${progress}% - 35px)` }}
      ></div>

      {sections.map((item) => (
        <a
          key={item.id}
          href={`#${item.id}`}
          className={
            active === item.id
              ? "side-item active"
              : "side-item"
          }
        >
          {item.number}
        </a>
      ))}
    </div>
  );
}

export default SideNav;