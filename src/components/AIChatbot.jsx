import { useState } from "react";
import "./../styles/aichatbot.css";

function AIChatbot() {
  const [open, setOpen] = useState(false);

  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "👋 Hi! I'm Ishu AI.\nAsk me about Skills, Projects, Resume or Contact.",
    },
  ]);

  // ===========================
  // 🔊 Better Text To Speech
  // ===========================

  const speak = (text) => {
    if (!("speechSynthesis" in window)) return;

    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(text);

    const voices = window.speechSynthesis.getVoices();

    const preferredVoice =
        voices.find((v) => v.name === "Alex") ||
        voices.find((v) => v.name === "Daniel") ||
        voices.find((v) => v.name === "Google UK English Male") ||
        voices.find((v) => v.name === "Microsoft David") ||
        voices.find((v) => v.name.toLowerCase().includes("male")) ||
        voices.find((v) => v.lang === "en-US") ||
        voices[0];

    if (preferredVoice) {
      utterance.voice = preferredVoice;
    }

    utterance.lang = "en-US";
    utterance.rate = 0.9;
    utterance.pitch = 1;
    utterance.volume = 1;

    window.speechSynthesis.speak(utterance);
  };

  // ===========================
  // 🤖 AI Reply
  // ===========================

  const reply = (question) => {
    let answer = "";

    switch (question) {
      case "About":
        answer =
          "Hello! My name is Ishu Rana. I am a B.Tech CSE student specializing in Artificial Intelligence and Machine Learning. I enjoy building AI applications and modern web projects.";
        break;

      case "Skills":
        answer =
          "My technical skills include Python, Java, React, HTML, CSS, JavaScript, Flask, Machine Learning, Git and GitHub.";
        break;

      case "Projects":
        answer =
          "My major projects include an Inventory Management System, an AI Resume Screening System, and several Machine Learning based applications.";
        break;

      case "Resume":
        answer =
          "You can view or download my resume by clicking the Resume button available on the home page.";
        break;

      case "Contact":
        answer =
          "You can contact me through the Contact section, LinkedIn or GitHub. I will be happy to connect with you.";
        break;

      default:
        answer =
          "Sorry, I don't know the answer to that yet.";
    }

    setMessages((prev) => [
      ...prev,
      {
        sender: "user",
        text: question,
      },
      {
        sender: "bot",
        text: answer,
      },
    ]);

    speak(answer);
  };

  // ===========================
  // 👋 Welcome Speech
  // ===========================

  const handleChat = () => {

    setOpen(!open);

    if (!open) {

      setTimeout(() => {

        speak(
          "Hello. Welcome to Ishu Rana's AI Portfolio. I am Ishu AI. How can I help you today?"
        );

      }, 400);

    } else {

      window.speechSynthesis.cancel();

    }

  };

  return (
    <>
      <button
        className="chat-btn"
        onClick={handleChat}
      >
        🤖
      </button>

      {open && (
        <div className="chat-box">

          <div className="chat-header">
            🤖 Ask Ishu AI
          </div>

          <div className="chat-body">

            {messages.map((msg, index) => (

              <div
                key={index}
                className={msg.sender}
              >
                {msg.text}
              </div>

            ))}

          </div>

          <div className="chat-options">

            <button onClick={() => reply("About")}>
              About
            </button>

            <button onClick={() => reply("Skills")}>
              Skills
            </button>

            <button onClick={() => reply("Projects")}>
              Projects
            </button>

            <button onClick={() => reply("Resume")}>
              Resume
            </button>

            <button onClick={() => reply("Contact")}>
              Contact
            </button>

          </div>

        </div>
      )}
    </>
  );
}

export default AIChatbot;