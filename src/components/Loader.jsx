import "./../styles/loader.css";
import { useState, useEffect } from "react";

function Loader() {
  const messages = [
    "Initializing AI System...",
    "Loading Neural Network...",
    "Loading Machine Learning Models...",
    "Connecting AI Engine...",
    "Preparing Portfolio...",
    "Launching Interface..."
  ];

  const [index, setIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {

    const progressInterval = setInterval(() => {

      setProgress((prev) => {

        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }

        return prev + 2;

      });

    }, 55);

    const statusInterval = setInterval(() => {

      setIndex((prev) => {

        if (prev >= messages.length - 1) return prev;

        return prev + 1;

      });

    }, 500);

    return () => {

      clearInterval(progressInterval);
      clearInterval(statusInterval);

    };

  }, []);

  return (

    <div className="loader">

      <div className="loader-card">

        {/* AI HUD */}

        <div className="loader-hud">

          <div className="loader-ring loader-ring1"></div>

          <div className="loader-ring loader-ring2"></div>

          <div className="loader-ring loader-ring3"></div>

          <div className="loader-center-dot"></div>

        </div>

        {/* Logo */}

        <div className="loader-logo">

          <span>Ishu</span> Portfolio

        </div>

        <p className="loader-subtitle">

          Artificial Intelligence Portfolio

        </p>

        {/* Percentage */}

        <div className="percentage">

          {progress}%

        </div>

        {/* Progress */}

        <div className="loader-line">

          <div
            className="loader-progress"
            style={{
              width: `${progress}%`
            }}
          ></div>

        </div>

        {/* Status */}

        <div className="loader-status">

          {progress === 100
            ? "System Ready ✓"
            : messages[index]}

          <span className="cursor">|</span>

        </div>

        {/* Bottom Status */}

        <div className="loader-footer">

          <span>

            <span className="dot"></span>

            AI Engine

          </span>

          <span>

            <span className="dot"></span>

            Neural Network

          </span>

          <span>

            <span className="dot"></span>

            Online

          </span>

        </div>

      </div>

    </div>

  );

}

export default Loader;