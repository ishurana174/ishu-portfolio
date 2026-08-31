import { useEffect, useState } from "react";
import "./CustomCursor.css";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [trail, setTrail] = useState({ x: 0, y: 0 });
  const [clicked, setClicked] = useState(false);
  const [hover, setHover] = useState(false);

  useEffect(() => {
    const move = (e) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    const down = () => setClicked(true);
    const up = () => setClicked(false);

    const enter = () => setHover(true);
    const leave = () => setHover(false);

    window.addEventListener("mousemove", move);
    window.addEventListener("mousedown", down);
    window.addEventListener("mouseup", up);

    const items = document.querySelectorAll(
      "a, button, .btn, .skill-card, .project-card, .education-card"
    );

    items.forEach((item) => {
      item.addEventListener("mouseenter", enter);
      item.addEventListener("mouseleave", leave);
    });

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mousedown", down);
      window.removeEventListener("mouseup", up);

      items.forEach((item) => {
        item.removeEventListener("mouseenter", enter);
        item.removeEventListener("mouseleave", leave);
      });
    };
  }, []);

  useEffect(() => {
    let animation;

    const animate = () => {
      setTrail((prev) => ({
        x: prev.x + (position.x - prev.x) * 0.15,
        y: prev.y + (position.y - prev.y) * 0.15,
      }));

      animation = requestAnimationFrame(animate);
    };

    animate();

    return () => cancelAnimationFrame(animation);
  }, [position]);

  return (
    <>
      <div
        className="cursor-trail"
        style={{
          left: trail.x,
          top: trail.y,
        }}
      />

      <div
        className={`cursor-ring ${hover ? "hover" : ""} ${
          clicked ? "clicked" : ""
        }`}
        style={{
          left: position.x,
          top: position.y,
        }}
      />

      <div
        className={`custom-cursor ${clicked ? "clicked" : ""}`}
        style={{
          left: position.x,
          top: position.y,
        }}
      />
    </>
  );
}