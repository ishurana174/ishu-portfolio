import { useEffect, useRef } from "react";

export default function ParticlesBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let w = window.innerWidth;
    let h = window.innerHeight;

    canvas.width = w;
    canvas.height = h;

    const mouse = {
      x: -9999,
      y: -9999,
    };

    class Particle {
      constructor() {
        this.reset();
      }

      reset() {
        this.x = Math.random() * w;
        this.y = Math.random() * h;

        this.vx = (Math.random() - 0.5) * 0.8;
        this.vy = (Math.random() - 0.5) * 0.8;

        this.size = Math.random() * 2 + 1;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > w) this.vx *= -1;
        if (this.y < 0 || this.y > h) this.vy *= -1;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);

        ctx.fillStyle = "#00e5ff";

        ctx.shadowColor = "#00e5ff";
        ctx.shadowBlur = 10;

        ctx.fill();
      }
    }

    const particles = [];

    for (let i = 0; i < 180; i++) {
      particles.push(new Particle());
    }

    function connect() {
      for (let a = 0; a < particles.length; a++) {
        for (let b = a + 1; b < particles.length; b++) {

          const dx = particles[a].x - particles[b].x;
          const dy = particles[a].y - particles[b].y;

          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 120) {

            ctx.beginPath();

            ctx.moveTo(particles[a].x, particles[a].y);

            ctx.lineTo(particles[b].x, particles[b].y);

            ctx.strokeStyle = `rgba(0,229,255,${
              1 - dist / 120
            })`;

            ctx.lineWidth = 1;

            ctx.stroke();

          }
        }
      }
    }

    function animate() {

      ctx.clearRect(0, 0, w, h);

      particles.forEach((p) => {
        p.update();
        p.draw();
      });

      connect();

      requestAnimationFrame(animate);

    }

    animate();

    window.addEventListener("mousemove", (e) => {

      mouse.x = e.clientX;
      mouse.y = e.clientY;

    });

    window.addEventListener("resize", () => {

      w = window.innerWidth;
      h = window.innerHeight;

      canvas.width = w;
      canvas.height = h;

    });

    return () => {};

  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        inset: 0,
        width: "100%",
        height: "100%",
        background: "#050816",
        zIndex: -1,
      }}
    />
  );
}