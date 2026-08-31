import { useState, useEffect } from "react";

import Loader from "./components/Loader";
import AIBackground from "./components/AIBackground";
import CustomCursor from "./components/CustomCursor";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import AIChatbot from "./components/AIChatbot";
import SideNav from "./components/SideNav";

function App() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2800);

    return () => clearTimeout(timer);
  }, []);

  // ===========================
  // LOADER SCREEN
  // ===========================

  if (loading) {
    return (
      <>
        <AIBackground />
        <Loader />
      </>
    );
  }

  // ===========================
  // MAIN WEBSITE
  // ===========================

  return (
    <>
      {/* AI Background */}
      <AIBackground />

      {/* Custom Cursor */}
      <CustomCursor />

      {/* Navbar */}
      <Navbar />
      <SideNav />

      {/* Main Content */}
      <main>
        <Hero />
        <About />
        <Skills />
        <Education />
        <Projects />
        <Contact />
      </main>
      <AIChatbot />

      {/* Footer */}
      <Footer />
    </>
  );
}

export default App;