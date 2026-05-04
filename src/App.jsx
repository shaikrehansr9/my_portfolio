import { ThemeProvider, CssBaseline, Box } from "@mui/material";
import theme from "./theme";
import { useEffect, useState } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Stats from "./components/Stats";
import About from "./components/About";

function App() {

  // 🔥 Cursor position state
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      {/* 🔥 Cursor Glow */}
      <Box
        sx={{
          position: "fixed",
          top: position.y - 100,
          left: position.x - 100,
          width: 200,
          height: 200,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(255,0,0,0.12), transparent 70%)",
          pointerEvents: "none",
          zIndex: 0,
          transition: "transform 0.1s ease-out",
        }}
      />

      {/* Content */}
      <Navbar />
      <Hero />
      <Stats />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Contact />

    </ThemeProvider>
  );
}

export default App;